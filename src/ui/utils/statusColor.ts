export function statusColor(status: number) {
   if (status >= 500) return "text-red-400";
   if (status >= 400) return "text-yellow-300";
   if (status >= 300) return "text-blue-300";
   return "text-green-300";
}