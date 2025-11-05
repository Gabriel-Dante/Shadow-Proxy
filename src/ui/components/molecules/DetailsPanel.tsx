import type { HttpExchange } from "@/ui/types/common"
import HttpEditor from "@/ui/components/atoms/HttpEditor"

type DetailsPanelProps = {
    selected: HttpExchange | null,
    setSelected: React.Dispatch<React.SetStateAction<HttpExchange | null>>,
}

export default function DetailsPanel({ selected, setSelected }: DetailsPanelProps) {


    return (
        <aside className="h-1/2 bg-[#0f1113]">
            <>
                <div className="flex h-full gap-1 text-sm">
                    <section className="w-full h-full grid grid-rows-[auto_1fr_auto]  rounded-b-md">
                        <h4 className="p-3 bg-bgprimary my-1 rounded-t-sm">Request</h4>
                        <div className="overflow-auto">
                            <HttpEditor isReadOnly={false} />
                        </div>
                        <h4 className="p-2 bg-bgprimary rounded-b-md  "></h4>

                    </section>

                    <section className="w-full h-full grid grid-rows-[auto_1fr_auto]  rounded-b-md">
                        <h4 className="p-3 bg-bgprimary my-1 rounded-t-sm">Response</h4>
                        <div className="overflow-auto">
                            <HttpEditor isReadOnly={false} />
                        </div>
                        <h4 className="p-2 bg-bgprimary rounded-b-md "></h4>

                    </section>
                </div>
            </>
        </aside>
    )
}
