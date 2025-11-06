import { statusColor } from "@/ui/utils/statusColor"
import { MethodBadge } from "../atoms/MethodBadge"
import type { HttpExchange } from "@/ui/types/common"

type Column = { label: string; width: string };

type TableProps = {
  columns: Column[];
  requests: HttpExchange[] | null;
  onSelect: React.Dispatch<React.SetStateAction<HttpExchange | null>>;
};

export default function Table({ columns, requests, onSelect }: TableProps) {

  return (
    <div className="h-1/2 flex-1 min-w-[540px] overflow-auto bg-bgprimary rounded-b-sm">
      <table className="w-full text-sm table-fixed">
        <thead className="sticky top-0 bg-[#0f1113] z-10">
          <tr className="text-left text-xs text-gray-400">
            {columns.map((col, i) => (
              <th
                key={i}
                className={`px-3 py-2 outline outline-[#161B22] -outline-offset-1 ${col.width}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {requests && requests.length > 0 ? (
            requests.map((r) => (
              <tr
                key={r.id}
                onClick={() => onSelect(r)}
                className="cursor-pointer hover:bg-[#0f1113] border-y border-[#272933] transition-colors"
              >
                <td className="px-3 py-2 text-xs text-gray-400">{r.id}</td>
                <td className="px-3 py-2 text-xs text-gray-400">{r.time}</td>
                <td className="px-3 py-2">
                  <MethodBadge method={r.request.method} />
                </td>
                <td className="px-3 py-2 break-all">{r.request.host}</td>
                <td className={`px-3 py-2 ${statusColor(r.response.statusCode)} font-medium`}>
                  {r.response.statusCode}
                </td>
                {/*size = headersSize + bodySize */}
                <td className="px-3 py-2 text-gray-400">{r.response.headersSize}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-3 py-6 text-center text-gray-500">
                No requests
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}