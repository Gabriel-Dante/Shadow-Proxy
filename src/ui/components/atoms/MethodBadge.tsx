import type { Method } from "@/ui/types/common";



export function MethodBadge({ method }: { method: Method }) {
   const base = "px-2 py-0.5 rounded text-xs font-medium";
   // const map: Record<Method, string> = {
   //    GET: "bg-green-700 text-green-200",
   //    POST: "bg-blue-700 text-blue-200",
   //    PUT: "bg-yellow-800 text-yellow-200",
   //    DELETE: "bg-red-800 text-red-200",
   //    PATCH: "bg-purple-800 text-purple-200",
   //    OPTIONS: "bg-gray-500",
   //    HEAD: "bg-gray-700  ",
   // };
   // return <span className={`${base} ${map[method]}`}>{method}</span>;
   return <span className={`${base} `}>{method}</span>;
}