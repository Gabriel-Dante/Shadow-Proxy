import type { HttpExchange } from "@/ui/types/common"
import HttpEditor from "@/ui/components/atoms/HttpEditor"
import { parse, build } from 'http-z';
import type { RequestModel, ResponseModel } from "@/ui/types/common";


type DetailsPanelProps = {
    request: string | null,
    response: string | null,
    // setSelected: React.Dispatch<React.SetStateAction<HttpExchange | null>>,
}

export default function DetailsPanel({ request, response }: DetailsPanelProps) {


    return (
        <aside className="h-1/2 bg-[#0f1113]">
            <>
                <div className="flex h-full gap-1 text-sm">
                    <section className="w-full h-full grid grid-rows-[auto_1fr_auto]  rounded-b-md">
                        <h4 className="p-3 bg-bgprimary my-1 rounded-t-sm">Request</h4>
                        <div className="overflow-auto">
                            <HttpEditor isReadOnly={true} rawHttp={request}/>
                        </div>
                        <h4 className="p-2 bg-bgprimary rounded-b-md  "></h4>

                    </section>

                    <section className="w-full h-full grid grid-rows-[auto_1fr_auto]  rounded-b-md">
                        <h4 className="p-3 bg-bgprimary my-1 rounded-t-sm">Response</h4>
                        <div className="overflow-auto">
                            <HttpEditor isReadOnly={true} rawHttp={response}/>
                        </div>
                        <h4 className="p-2 bg-bgprimary rounded-b-md "></h4>

                    </section>
                </div>
            </>
        </aside>
    )
}
