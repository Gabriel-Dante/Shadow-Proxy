export interface HttpRequest {
  id: number;
  method: string;
  url: string;
  body?: string;
  response?: string;
}