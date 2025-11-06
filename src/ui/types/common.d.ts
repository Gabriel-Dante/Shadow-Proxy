export type Method =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS"
  | "CONNECT"
  | "TRACE"

type HttpZHeader = {
  name: string;
  value: string;
};

type HttpZParam = {
    name: string;
    value?: string;
};

type HttpZParserModel = {
  headers: HttpZHeader[];
  body?: HttpZBody;
  headersSize?: number;
  bodySize?: number;
};


export type RequestModel = HttpZParserModel & {
    method: HttpMethod;
    target: string;
    host: string;
    path: string;
    protocolVersion: HttpProtocolVersion;
    queryParams?: HttpZParam[];
    cookies?: HttpZParam[];
}


export type ResponseModel = HttpZParserModel & {
    protocolVersion: HttpProtocolVersion;
    statusCode: number;
    statusMessage: string;
    cookies?: HttpZCookieParam[];
};

export type HttpExchange = {
  id: string;
  time: string;
  request: RequestModel;
  response: ResponseModel;
}