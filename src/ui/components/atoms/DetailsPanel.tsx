import type { HttpExchange } from "@/ui/types/common"

type DetailsPanelProps = {
    selected: HttpExchange | null,
    setSelected: React.Dispatch<React.SetStateAction<HttpExchange | null>>,
}

export default function DetailsPanel({selected, setSelected} : DetailsPanelProps) {

    return (
        <aside className="h-1/2 bg-bgsimple p-3 border-t border-[#272933] overflow-auto">
            {!selected ? (
                <div className="text-gray-400">Select a request to see details</div>
            ) : (
                <>
                    <div className="flex mt-4 gap-2 text-sm">
                        <section className="w-1/2">
                            <h4 className="text-xs text-gray-400 mb-1">Request</h4>
                            <pre className="bg-[#0f1113] p-2 rounded text-xs overflow-auto h-40 whitespace-pre-wrap">
                                {selected.request.body}
                            </pre>
                        </section>

                        <section className="w-1/2">
                            <h4 className="text-xs text-gray-400 mb-1">Response</h4>
                            <pre className="bg-[#0f1113] p-2 rounded text-xs overflow-auto h-40 whitespace-pre-wrap">
                                {selected.response.body || "(empty)"}
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
    )
}
