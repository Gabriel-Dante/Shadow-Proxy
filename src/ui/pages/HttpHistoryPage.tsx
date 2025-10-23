import { useState } from "react";
import { statusColor } from "../utils/statusColor";
import type { Method, HttpExchange} from "../types/common";
import { MethodBadge } from "../components/atoms/MethodBadge";
import DetailsPanel from "../components/atoms/DetailsPanel";

export const SAMPLE: HttpExchange[] = [
  {
    id: "1",
    time: "2025-09-29 14:33:02",
    request: {
      method: "GET",
      url: "https://api.example.com/users",
      host: "api.example.com",
      path: "/users",
      status: 200,
      length: 842,
      mime: "application/json",
      body: "GET /users HTTP/1.1\nHost: api.example.com\n\n",
    },
    response: {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"users":[{"id":1,"name":"Alice"}]}',
      mime: "application/json",
      time: "2025-09-29 14:33:02",
    },
  },
  {
    id: "2",
    time: "2025-09-29 14:33:15",
    request: {
      method: "POST",
      url: "https://api.example.com/login",
      host: "api.example.com",
      path: "/login",
      status: 401,
      length: 128,
      mime: "application/json",
      body: 'POST /login HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{"user":"bob"}',
    },
    response: {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
      body: '{"error":"invalid credentials"}',
      mime: "application/json",
      time: "2025-09-29 14:33:15",
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
         r.request.url.toLowerCase().includes(q) ||
         r.request.host.toLowerCase().includes(q) ||
         r.request.path.toLowerCase().includes(q) ||
         String(r.request.status).includes(q)
      );
   });


   return (
      <div className="h-full flex flex-col text-gray-100">
         <div className="flex items-center gap-3 p-3 ">
            <h2 className="text-lg font-semibold">HTTP History</h2>
            <div className="ml-auto flex items-center gap-2">
               <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search url, host, status..."
                  className="px-2 py-1 bg-[#0f1113] border border-[#272933] rounded text-sm focus:outline-none"
               />
               <select
                  value={methodFilter}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                     setMethodFilter(e.target.value as Method | "ALL")
                  }
                  className="bg-[#0f1113] border border-[#272933] rounded px-2 py-1 text-sm"
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

         <div className="flex flex-col flex-1 overflow-hidden">
            {/* Tabela de requests */}
            <div className="h-1/2 flex-1 min-w-[540px] overflow-auto">
               <table className="w-full text-sm table-auto">
                  <thead className="sticky top-0 bg-[#0f1113] z-10">

                     <tr className="text-left text-xs text-gray-400 ">
                        <th className="px-3 py-2 outline outline-[#161B22] -outline-offset-1">id</th>
                        <th className="px-3 py-2 outline outline-[#161B22] -outline-offset-1">Time</th>
                        <th className="px-3 py-2 outline outline-[#161B22] -outline-offset-1">Method</th>
                        <th className="px-3 py-2 outline outline-[#161B22] -outline-offset-1">URL</th>
                        <th className="px-3 py-2 outline outline-[#161B22] -outline-offset-1">Status</th>
                        <th className="px-3 py-2 outline outline-[#161B22] -outline-offset-1">Length</th>
                     </tr>
                  </thead>
                  <tbody>
                     {filtered.map((r) => (
                        <tr
                           key={r.id}
                           onClick={() => setSelected(r)}
                           className="cursor-pointer hover:bg-[#0f1113] border-y border-[#272933] transition-colors"
                        >
                           <td className="px-3 py-2 align-center text-xs text-gray-400">{r.id}</td>
                           <td className="px-3 py-2  text-xs text-gray-400">{r.time}</td>
                           <td className="px-3 py-2 ">
                              <MethodBadge method={r.request.method} />
                           </td>
                           <td className="px-3 py-2  break-all">{r.request.url}</td>
                           <td className={`px-3 py-2  ${statusColor(r.request.status)} font-medium`}>
                              {r.request.status}
                           </td>
                           <td className="px-3 py-2  text-gray-400">{r.request.length}</td>
                        </tr>
                     ))}
                     {filtered.length === 0 && (
                        <tr>
                           <td colSpan={5} className="px-3 py-6 text-center text-gray-500">
                              No requests
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

            {/* Painel de detalhes fixo embaixo */}
            <DetailsPanel selected={selected} setSelected={setSelected}/>
         </div>
      </div>
   );
}
