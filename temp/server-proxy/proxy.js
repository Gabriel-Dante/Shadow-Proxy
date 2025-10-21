const Proxy = require("http-mitm-proxy").Proxy;
const httpZ = require("http-z");
const querystring = require("querystring");
const { broadcast } = require("./wsServer");

const proxy = new Proxy();
const port = 8081;
const TEXT_TYPES = [
  "text/",
  "application/json",
  "application/javascript",
  "application/xml",
  "application/x-www-form-urlencoded",
  "application/xhtml+xml",
];

//função externa
function parseCookieHeader(cookieHeader) {
  if (!cookieHeader) return [];
  return cookieHeader.split(/;\s*/).map((pair) => {
    const [name, ...rest] = pair.split("=");
    return { name: name || "", value: rest.join("=") || "" };
  });
}
proxy.use(Proxy.gunzip);
proxy.use(Proxy.wildcard);

proxy.onError((ctx, err) => {
  console.error("Proxy error", err);
});

proxy.onRequest((ctx, callback) => {
  const req = ctx.clientToProxyRequest;
  const scheme = ctx.isSSL ? "https" : "http";
  const fullUrl = `${scheme}://${req.headers.host || "localhost"}${
    req.url || "/"
  }`;
  const urlInfo = httpZ.utils.parseUrl(fullUrl);
  const requestModel = {
    method: req.method || "GET",
    protocolVersion: req.httpVersion,
    protocol: "HTTP",
    host: req.headers.host || "",
    path: urlInfo.path || req.url || "",
    headers: Object.entries(req.headers || {}).map(([k, v]) => ({
      name: k,
      value: Array.isArray(v) ? v.join(",") : String(v),
    })),
    cookies: parseCookieHeader(req.headers.cookie),
    body: null,
  };

  const reqChunks = [];
  ctx.onRequestData((ctx, chunk, cb) => {
    reqChunks.push(chunk);
    cb(null, chunk); // passa adiante o chunk
  });

  ctx.onRequestEnd((ctx, cb) => {
    const body = Buffer.concat(reqChunks);
    const contentType = req.headers["content-type"] || "";
    let params = [];
    let textBody = body.toString();
    if (contentType.includes("application/x-www-form-urlencoded")) {
      // Parseia o corpo URL-encoded em params
      const parsed = querystring.parse(textBody);
      params = Object.entries(parsed).map(([k, v]) => ({
        name: k,
        value: Array.isArray(v) ? v.join(",") : String(v),
      }));
      textBody = ""; // deixa só params
    } else if (contentType.includes("multipart/form-data")) {
      // Apenas pega boundary, params vazio, mantém texto bruto
      params = [];
      textBody = body.toString();
    } else if (
      contentType.includes("application/json") ||
      contentType.startsWith("text/")
    ) {
      // JSON e textos → mantém texto
      textBody = body.toString();
    } else {
      // Outros tipos → mantém texto bruto ou base64
      textBody = body.toString("base64");
    }
    // Montando o body no formato HttpZBody
    const requestBody = body.length
      ? {
          contentType,
          boundary: contentType.includes("multipart/form-data")
            ? contentType.split("boundary=")[1] || ""
            : "",
          params, // você pode preencher se quiser parsear form-data ou urlencoded
          text: body.toString(),
        }
      : null;

    requestModel.body = requestBody;
    broadcast(requestModel);
    console.log(`\n--- REQUEST ---`);
    console.log(httpZ.build(requestModel));

    cb();
  });

  // RESPONSE HOOKS
  ctx.onResponse((ctx, cb) => {
    const res = ctx.serverToProxyResponse;

    const resChunks = [];
    ctx.onResponseData((ctx, chunk, cbb) => {
      resChunks.push(chunk);
      cbb(null, chunk); // passa adiante o chunk
    });

    ctx.onResponseEnd((ctx, cbb) => {
      const resBody = Buffer.concat(resChunks);
      const resContentType = res.headers["content-type"] || "";

      const responseBody = {
        contentType: resContentType,
        boundary: "",
        params: [],
        text: resBody.toString(),
      };

      const responseModel = {
        protocolVersion: `HTTP/${res.httpVersion}`,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        headers: Object.entries(res.headers || {}).map(([k, v]) => ({
          name: k,
          value: Array.isArray(v) ? v.join(",") : String(v),
        })),
        cookies: parseCookieHeader(res.headers.cookie),
        body: responseBody,
      };
      broadcast(responseModel);
      console.log(`\n--- RESPONSE ---`);
      console.log(httpZ.build(responseModel));

      cbb();
    });

    cb();
  });

  callback();
});

proxy.listen({ port: port, host: "127.0.0.1" }, () => {
  console.log(`Proxy rodando em 127.0.0.1:${port}`);
});
