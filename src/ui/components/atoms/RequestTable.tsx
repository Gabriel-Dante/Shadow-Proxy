import { statusColor } from "@/ui/utils/statusColor"
import { MethodBadge } from "./MethodBadge"
import type { HttpExchange } from "@/ui/types/common"

type RequestTableProps = {
    requests: HttpExchange[] | null,
    setSelected: React.Dispatch<React.SetStateAction<HttpExchange | null>>,
}


export default function RequestTable({requests, setSelected}: RequestTableProps) {

    return (
        <div className="h-1/2 flex-1 min-w-[540px] overflow-auto">
            <table className="w-full text-sm table-fixed">
                <thead className="sticky top-0 bg-[#0f1113] z-10">
                    <tr className="text-left text-xs text-gray-400 ">
                        <th className="px-3 py-2 outline outline-[#161B22] w-20 -outline-offset-1">Id</th>
                        <th className="px-3 py-2 outline outline-[#161B22] w-32 -outline-offset-1">Time</th>
                        <th className="px-3 py-2 outline outline-[#161B22] w-24 -outline-offset-1">Method</th>
                        <th className="px-3 py-2 outline outline-[#161B22] w-[300px] -outline-offset-1">URL</th>
                        <th className="px-3 py-2 outline outline-[#161B22] w-24 -outline-offset-1">Status</th>
                        <th className="px-3 py-2 outline outline-[#161B22] w-24 -outline-offset-1">Length</th>
                    </tr>
                </thead>
                <tbody>
                    {requests?.map((r) => (
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
                    {requests?.length === 0 && (
                        <tr>
                            <td colSpan={5} className="px-3 py-6 text-center text-gray-500">
                                No requests
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
} 