import { useState } from "react";
import type { Method, HttpExchange } from "../types/common";
import DetailsPanel from "../components/molecules/DetailsPanel";
import RequestTable from "../components/molecules/RequestTable";


const SAMPLE: HttpExchange[] = [
  {
    id: "1",
    time: "2025-11-06T13:05:00Z",
    request: {
      method: "GET",
      target: "/api/users",
      host: "example.com",
      path: "/api/users",
      protocolVersion: "HTTP/1.1",
      headers: [{ name: "Accept", value: "application/json" }],
      queryParams: [{ name: "page", value: "1" }],
    },
    response: {
      protocolVersion: "HTTP/1.1",
      statusCode: 200,
      statusMessage: "OK",
      headers: [{ name: "Content-Type", value: "application/json" }],
      body: { text: '{"users":[{"id":1,"name":"Alice"}]}' },
    },
  },
  {
    id: "2",
    time: "2025-11-06T13:06:00Z",
    request: {
      method: "POST",
      target: "/api/login",
      host: "example.com",
      path: "/api/login",
      protocolVersion: "HTTP/1.1",
      headers: [
        { name: "Content-Type", value: "application/json" },
        { name: "Accept", value: "application/json" },
      ],
      body: { text: '{"username":"john","password":"secret"}' },
    },
    response: {
      protocolVersion: "HTTP/1.1",
      statusCode: 201,
      statusMessage: "Created",
      headers: [{ name: "Set-Cookie", value: "sessionId=abc123" }],
      body: { text: '{"token":"xyz"}' },
    },
  },
  {
    id: "3",
    time: "2025-11-06T13:07:00Z",
    request: {
      method: "DELETE",
      target: "/api/users/1",
      host: "example.com",
      path: "/api/users/1",
      protocolVersion: "HTTP/1.1",
      headers: [{ name: "Authorization", value: "Bearer xyz" }],
    },
    response: {
      protocolVersion: "HTTP/1.1",
      statusCode: 204,
      statusMessage: "No Content",
      headers: [],
    },
  },
  {
    id: "4",
    time: "2025-11-06T13:08:00Z",
    request: {
      method: "PATCH",
      target: "/api/users/1",
      host: "example.com",
      path: "/api/users/1",
      protocolVersion: "HTTP/1.1",
      headers: [{ name: "Content-Type", value: "application/json" }],
      body: { text: '{"name":"Alice Updated"}' },
    },
    response: {
      protocolVersion: "HTTP/1.1",
      statusCode: 200,
      statusMessage: "OK",
      headers: [{ name: "Content-Type", value: "application/json" }],
      body: { text: '{"id":1,"name":"Alice Updated"}' },
    },
  },
  {
    id: "5",
    time: "2025-11-06T13:09:00Z",
    request: {
      method: "OPTIONS",
      target: "/api/users",
      host: "example.com",
      path: "/api/users",
      protocolVersion: "HTTP/1.1",
      headers: [{ name: "Origin", value: "https://client.com" }],
    },
    response: {
      protocolVersion: "HTTP/1.1",
      statusCode: 204,
      statusMessage: "No Content",
      headers: [
        { name: "Access-Control-Allow-Origin", value: "*" },
        { name: "Access-Control-Allow-Methods", value: "GET,POST,DELETE" },
      ],
    },
  },
];



export default function HttpHistoryPage() {
   const [query, setQuery] = useState("");
   const [methodFilter, setMethodFilter] = useState<Method | "ALL">("ALL");
   const [selected, setSelected] = useState<HttpExchange | null>(null);
   const [list] = useState<HttpExchange[]>(SAMPLE);


   const filtered = list.filter((r) => {
      if (methodFilter !== "ALL" && r.request.method !== methodFilter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
         r.request.path.toLowerCase().includes(q) ||
         r.request.host.toLowerCase().includes(q) ||
         r.request.path.toLowerCase().includes(q) ||
         String(r.response.statusCode).includes(q)
      );
   });


   return (
      <div className="h-full flex flex-col text-gray-100">
         <div className="flex items-center gap-3 p-3 bg-bgprimary rounded-t-md">
            <h2 className="text-lg text-emerald-400/30">HTTP History</h2>
            <div className="ml-auto flex items-center gap-2">
               <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search url, host, status..."
                  className="px-2 py-1 bg-[#0f1113] border border-emerald-400/30 rounded text-sm focus:outline-none"
               />
               <select
                  value={methodFilter}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                     setMethodFilter(e.target.value as Method | "ALL")
                  }
                  className="bg-[#0f1113] border border-emerald-400/30 rounded px-2 py-1 text-sm"
               >
                  <option value="ALL">All</option>
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                  <option value="PATCH">PATCH</option>
               </select>
            </div>
         </div>

         <div className="flex flex-col flex-1 overflow-hidden ">
            <RequestTable requests={filtered} setSelected={setSelected} />
            <DetailsPanel request="" response="" />
         </div>
      </div>
   );
}
