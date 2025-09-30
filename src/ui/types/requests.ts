import type { Method } from "./common";

export type Req = {
  id: string;
  time: string;
  method: Method;
  url: string;
  host: string;
  path: string;
  status: number;
  length: number;
  mime?: string;
  request: string;
  response: string;
};
