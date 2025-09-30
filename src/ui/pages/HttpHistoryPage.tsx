import { useMemo, useState } from "react";
import type { Req } from "../types/requests";
import type { Method } from "../types/common";
const SAMPLE: Req[] = [
   {
      id: "1",
      time: "2025-09-29 14:33:02",
      method: "GET",
      url: "https://api.example.com/users",
      host: "api.example.com",
      path: "/users",
      status: 200,
      length: 842,
      mime: "application/json",
      request: "GET /users HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"users":[{"id":1,"name":"Alice"}]}',
   },
   {
      id: "2",
      time: "2025-09-29 14:33:15",
      method: "POST",
      url: "https://api.example.com/login",
      host: "api.example.com",
      path: "/login",
      status: 401,
      length: 128,
      mime: "application/json",
      request: 'POST /login HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{"user":"bob"}',
      response: '{"error":"invalid credentials"}',
   },
   {
      id: "3",
      time: "2025-09-29 14:34:05",
      method: "GET",
      url: "https://static.cdn/img.png",
      host: "static.cdn",
      path: "/img.png",
      status: 304,
      length: 0,
      mime: "image/png",
      request: "GET /img.png HTTP/1.1\nHost: static.cdn\n\n",
      response: "",
   },
   {
      id: "4",
      time: "2025-09-29 14:34:20",
      method: "GET",
      url: "https://api.example.com/users/1",
      host: "api.example.com",
      path: "/users/1",
      status: 200,
      length: 120,
      mime: "application/json",
      request: "GET /users/1 HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"id":1,"name":"Alice"}',
   },
   {
      id: "5",
      time: "2025-09-29 14:34:25",
      method: "DELETE",
      url: "https://api.example.com/users/2",
      host: "api.example.com",
      path: "/users/2",
      status: 204,
      length: 0,
      mime: "application/json",
      request: "DELETE /users/2 HTTP/1.1\nHost: api.example.com\n\n",
      response: "",
   },
   {
      id: "6",
      time: "2025-09-29 14:34:40",
      method: "PUT",
      url: "https://api.example.com/users/1",
      host: "api.example.com",
      path: "/users/1",
      status: 200,
      length: 130,
      mime: "application/json",
      request: 'PUT /users/1 HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{"name":"Alice Updated"}',
      response: '{"id":1,"name":"Alice Updated"}',
   },
   {
      id: "7",
      time: "2025-09-29 14:34:58",
      method: "GET",
      url: "https://cdn.example.com/style.css",
      host: "cdn.example.com",
      path: "/style.css",
      status: 200,
      length: 452,
      mime: "text/css",
      request: "GET /style.css HTTP/1.1\nHost: cdn.example.com\n\n",
      response: "body{background:#fff;}",
   },
   {
      id: "8",
      time: "2025-09-29 14:35:02",
      method: "GET",
      url: "https://cdn.example.com/app.js",
      host: "cdn.example.com",
      path: "/app.js",
      status: 200,
      length: 900,
      mime: "application/javascript",
      request: "GET /app.js HTTP/1.1\nHost: cdn.example.com\n\n",
      response: "console.log('app loaded');",
   },
   {
      id: "9",
      time: "2025-09-29 14:35:10",
      method: "POST",
      url: "https://api.example.com/orders",
      host: "api.example.com",
      path: "/orders",
      status: 201,
      length: 200,
      mime: "application/json",
      request: 'POST /orders HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{"item":"Book","qty":1}',
      response: '{"id":101,"item":"Book","qty":1}',
   },
   {
      id: "10",
      time: "2025-09-29 14:35:25",
      method: "GET",
      url: "https://api.example.com/orders/101",
      host: "api.example.com",
      path: "/orders/101",
      status: 200,
      length: 150,
      mime: "application/json",
      request: "GET /orders/101 HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"id":101,"item":"Book","qty":1}',
   },
   {
      id: "11",
      time: "2025-09-29 14:35:40",
      method: "PATCH",
      url: "https://api.example.com/orders/101",
      host: "api.example.com",
      path: "/orders/101",
      status: 200,
      length: 160,
      mime: "application/json",
      request: 'PATCH /orders/101 HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{"qty":2}',
      response: '{"id":101,"item":"Book","qty":2}',
   },
   {
      id: "12",
      time: "2025-09-29 14:35:50",
      method: "GET",
      url: "https://api.example.com/health",
      host: "api.example.com",
      path: "/health",
      status: 200,
      length: 20,
      mime: "application/json",
      request: "GET /health HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"status":"ok"}',
   },
   {
      id: "13",
      time: "2025-09-29 14:36:05",
      method: "GET",
      url: "https://cdn.example.com/favicon.ico",
      host: "cdn.example.com",
      path: "/favicon.ico",
      status: 200,
      length: 318,
      mime: "image/x-icon",
      request: "GET /favicon.ico HTTP/1.1\nHost: cdn.example.com\n\n",
      response: "",
   },
   {
      id: "14",
      time: "2025-09-29 14:36:15",
      method: "POST",
      url: "https://api.example.com/logout",
      host: "api.example.com",
      path: "/logout",
      status: 200,
      length: 50,
      mime: "application/json",
      request: "POST /logout HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"message":"logged out"}',
   },
   {
      id: "15",
      time: "2025-09-29 14:36:20",
      method: "GET",
      url: "https://api.example.com/products",
      host: "api.example.com",
      path: "/products",
      status: 200,
      length: 250,
      mime: "application/json",
      request: "GET /products HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"products":[{"id":1,"name":"Pen"}]}',
   },
   {
      id: "16",
      time: "2025-09-29 14:36:35",
      method: "GET",
      url: "https://cdn.example.com/logo.svg",
      host: "cdn.example.com",
      path: "/logo.svg",
      status: 200,
      length: 150,
      mime: "image/svg+xml",
      request: "GET /logo.svg HTTP/1.1\nHost: cdn.example.com\n\n",
      response: "<svg></svg>",
   },
   {
      id: "17",
      time: "2025-09-29 14:36:50",
      method: "HEAD",
      url: "https://api.example.com/users",
      host: "api.example.com",
      path: "/users",
      status: 200,
      length: 0,
      mime: "application/json",
      request: "HEAD /users HTTP/1.1\nHost: api.example.com\n\n",
      response: "",
   },
   {
      id: "18",
      time: "2025-09-29 14:37:00",
      method: "OPTIONS",
      url: "https://api.example.com/users",
      host: "api.example.com",
      path: "/users",
      status: 204,
      length: 0,
      mime: "application/json",
      request: "OPTIONS /users HTTP/1.1\nHost: api.example.com\n\n",
      response: "",
   },
   {
      id: "19",
      time: "2025-09-29 14:37:15",
      method: "GET",
      url: "https://cdn.example.com/fonts/roboto.woff2",
      host: "cdn.example.com",
      path: "/fonts/roboto.woff2",
      status: 200,
      length: 2050,
      mime: "font/woff2",
      request: "GET /fonts/roboto.woff2 HTTP/1.1\nHost: cdn.example.com\n\n",
      response: "",
   },
   {
      id: "20",
      time: "2025-09-29 14:37:25",
      method: "GET",
      url: "https://static.cdn/banner.jpg",
      host: "static.cdn",
      path: "/banner.jpg",
      status: 200,
      length: 15000,
      mime: "image/jpeg",
      request: "GET /banner.jpg HTTP/1.1\nHost: static.cdn\n\n",
      response: "",
   },
   {
      id: "21",
      time: "2025-09-29 14:37:40",
      method: "POST",
      url: "https://api.example.com/cart",
      host: "api.example.com",
      path: "/cart",
      status: 200,
      length: 100,
      mime: "application/json",
      request: 'POST /cart HTTP/1.1\nHost: api.example.com\nContent-Type: application/json\n\n{"productId":1,"qty":3}',
      response: '{"cartId":555,"total":30}',
   },
   {
      id: "22",
      time: "2025-09-29 14:38:00",
      method: "GET",
      url: "https://api.example.com/cart/555",
      host: "api.example.com",
      path: "/cart/555",
      status: 200,
      length: 150,
      mime: "application/json",
      request: "GET /cart/555 HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"cartId":555,"items":[{"id":1,"qty":3}]}',
   },
   {
      id: "23",
      time: "2025-09-29 14:38:10",
      method: "DELETE",
      url: "https://api.example.com/cart/555",
      host: "api.example.com",
      path: "/cart/555",
      status: 204,
      length: 0,
      mime: "application/json",
      request: "DELETE /cart/555 HTTP/1.1\nHost: api.example.com\n\n",
      response: "",
   },
   {
      id: "24",
      time: "2025-09-29 14:38:30",
      method: "GET",
      url: "https://docs.example.com/help",
      host: "docs.example.com",
      path: "/help",
      status: 200,
      length: 350,
      mime: "text/html",
      request: "GET /help HTTP/1.1\nHost: docs.example.com\n\n",
      response: "<html><body>Help</body></html>",
   },
   {
      id: "25",
      time: "2025-09-29 14:38:45",
      method: "GET",
      url: "https://docs.example.com/terms",
      host: "docs.example.com",
      path: "/terms",
      status: 200,
      length: 500,
      mime: "text/html",
      request: "GET /terms HTTP/1.1\nHost: docs.example.com\n\n",
      response: "<html><body>Terms</body></html>",
   },
   {
      id: "26",
      time: "2025-09-29 14:39:00",
      method: "GET",
      url: "https://api.example.com/reports/sales",
      host: "api.example.com",
      path: "/reports/sales",
      status: 500,
      length: 80,
      mime: "application/json",
      request: "GET /reports/sales HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"error":"internal server error"}',
   },
   {
      id: "27",
      time: "2025-09-29 14:39:15",
      method: "GET",
      url: "https://api.example.com/stats",
      host: "api.example.com",
      path: "/stats",
      status: 200,
      length: 120,
      mime: "application/json",
      request: "GET /stats HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"users":120,"orders":45}',
   },
   {
      id: "28",
      time: "2025-09-29 14:39:30",
      method: "GET",
      url: "https://api.example.com/logs",
      host: "api.example.com",
      path: "/logs",
      status: 403,
      length: 60,
      mime: "application/json",
      request: "GET /logs HTTP/1.1\nHost: api.example.com\n\n",
      response: '{"error":"forbidden"}',
   },
];


function statusColor(status: number) {
   if (status >= 500) return "text-red-400";
   if (status >= 400) return "text-yellow-300";
   if (status >= 300) return "text-blue-300";
   return "text-green-300";
}

function MethodBadge({ method }: { method: Method }) {
   const base = "px-2 py-0.5 rounded text-xs font-medium";
   const map: Record<Method, string> = {
      GET: "bg-green-700 text-green-200",
      POST: "bg-blue-700 text-blue-200",
      PUT: "bg-yellow-800 text-yellow-200",
      DELETE: "bg-red-800 text-red-200",
      PATCH: "bg-purple-800 text-purple-200",
      OPTIONS: "bg-gray-500",
      HEAD: "bg-gray-700  ",
   };
   return <span className={`${base} ${map[method]}`}>{method}</span>;
}

export default function HttpHistoryPage() {
   const [query, setQuery] = useState("");
   const [methodFilter, setMethodFilter] = useState<Method | "ALL">("ALL");
   const [selected, setSelected] = useState<Req | null>(null);
   const [list] = useState<Req[]>(SAMPLE);

   const filtered = useMemo(() => {
      return list.filter((r) => {
         if (methodFilter !== "ALL" && r.method !== methodFilter) return false;
         if (!query) return true;
         const q = query.toLowerCase();
         return (
            r.url.toLowerCase().includes(q) ||
            r.host.toLowerCase().includes(q) ||
            r.path.toLowerCase().includes(q) ||
            String(r.status).includes(q)
         );
      });
   }, [list, methodFilter, query]);

   return (
      <div className="h-full flex flex-col text-gray-100">
         <div className="flex items-center gap-3 p-3 border-b border-[#272933]">
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
                  <thead className="sticky top-0 bg-[#16161e] z-10">
                     <tr className="text-left text-xs text-gray-400">
                        <th className="px-3 py-2">Time</th>
                        <th className="px-3 py-2">Method</th>
                        <th className="px-3 py-2">URL</th>
                        <th className="px-3 py-2">Status</th>
                        <th className="px-3 py-2">Length</th>
                     </tr>
                  </thead>
                  <tbody>
                     {filtered.map((r) => (
                        <tr
                           key={r.id}
                           onClick={() => setSelected(r)}
                           className="cursor-pointer hover:bg-[#0f1113] transition-colors"
                        >
                           <td className="px-3 py-2 align-top text-xs text-gray-400">{r.time}</td>
                           <td className="px-3 py-2 align-top">
                              <MethodBadge method={r.method} />
                           </td>
                           <td className="px-3 py-2 align-top break-all">{r.url}</td>
                           <td className={`px-3 py-2 align-top ${statusColor(r.status)} font-medium`}>
                              {r.status}
                           </td>
                           <td className="px-3 py-2 align-top text-gray-400">{r.length}</td>
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
            <aside className="h-1/2 bg-[#16161e] p-3 border-t border-[#272933] overflow-auto">
               {!selected ? (
                  <div className="text-gray-400">Select a request to see details</div>
               ) : (
                  <>
                     <div className="flex mt-4 gap-2 text-sm">
                        <section className="w-1/2">
                           <h4 className="text-xs text-gray-400 mb-1">Request</h4>
                           <pre className="bg-[#0f1113] p-2 rounded text-xs overflow-auto h-40 whitespace-pre-wrap">
                              {selected.request}
                           </pre>
                        </section>

                        <section className="w-1/2">
                           <h4 className="text-xs text-gray-400 mb-1">Response</h4>
                           <pre className="bg-[#0f1113] p-2 rounded text-xs overflow-auto h-40 whitespace-pre-wrap">
                              {selected.response || "(empty)"}
                           </pre>
                        </section>
                     </div>

                     <div className="mt-4 flex gap-2">
                        <button
                           className="px-3 py-1 rounded bg-[#3b82f6] text-white text-sm"
                           onClick={() => alert("Resend - placeholder")}
                        >
                           Resend
                        </button>
                        <button
                           className="px-3 py-1 rounded bg-[#0f1113] border border-[#272933] text-sm"
                           onClick={() => alert("Open in new tab - placeholder")}
                        >
                           Open
                        </button>
                        <button
                           className="ml-auto px-2 py-1 text-sm text-gray-400"
                           onClick={() => setSelected(null)}
                        >
                           Close
                        </button>
                     </div>
                  </>
               )}
            </aside>
         </div>
      </div>
   );
}
