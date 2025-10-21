
const Proxy = require('http-mitm-proxy').Proxy;
const httpZ = require('http-z');

const proxy = new Proxy();
const port = 8081
const TEXT_TYPES = [
  'text/', 'application/json', 'application/javascript', 'application/xml',
  'application/x-www-form-urlencoded', 'application/xhtml+xml'
];

proxy.use(Proxy.gunzip);
proxy.use(Proxy.wildcard);

proxy.onError((ctx, err) => {
  console.error('Proxy error', err);
});

proxy.onRequest((ctx, callback) => {
  const req = ctx.clientToProxyRequest;
  const protocol = ctx.isSSL ? 'https' : 'http';
  let fullUrl = req.url;
  if (!/^https?:\/\//i.test(fullUrl)) {
    fullUrl = `${protocol}://${req.headers.host || 'unknown'}${req.url}`;
  }

  console.log(`\n--- REQUEST ---`);
  console.log(`${req.method} ${fullUrl} HTTP/${req.httpVersion || '1.1'}`);
  Object.entries(req.headers).forEach(([k, v]) => console.log(`${k}: ${v}`));

  const reqChunks = [];
  ctx.onRequestData((ctx, chunk, cb) => {
    reqChunks.push(chunk);
    cb(null, chunk); // passa adiante o chunk
  });

  ctx.onRequestEnd((ctx, cb) => {
    const body = Buffer.concat(reqChunks);
    printBody('Request', body, req.headers);
    cb();
  });

  // RESPONSE HOOKS
  ctx.onResponse((ctx, cb) => {
    const res = ctx.serverToProxyResponse;

    console.log(`\n--- RESPONSE ---`);
    console.log(`HTTP/${res.httpVersion || '1.1'} ${res.statusCode} ${res.statusMessage || ''}`);
    Object.entries(res.headers || {}).forEach(([k, v]) => console.log(`${k}: ${v}`));

    const resChunks = [];
    ctx.onResponseData((ctx, chunk, cbb) => {
      resChunks.push(chunk);
      cbb(null, chunk); // passa adiante o chunk
    });

    ctx.onResponseEnd((ctx, cbb) => {
      const body = Buffer.concat(resChunks);
      //printBody('Response', body, res.headers || {});
      console.log(body.toString)
      cbb();
    });

    cb();
  });

  callback();
});

proxy.listen({ port: port, host: '127.0.0.1' }, () => {
  console.log(`Proxy rodando em 127.0.0.1:${port}`);
});


