export type Method =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS";

export type Request = {
  method: Method;
  url: string;
  host: string;
  path: string;
  status: number;
  length: number;
  mime?: string;
  body?: string;
};


export type Response = {
  status: number;
  headers: Record<string, string>;
  body?: string;
  mime?: string;
  time: string;
};

export type HttpExchange = {
  id: string;
  time: string;
  request: Request;
  response: Response;
}