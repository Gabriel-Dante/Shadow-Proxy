import Table from "../atoms/Table"
import type { HttpExchange } from "@/ui/types/common"


type RequestTableProps = {
    requests: HttpExchange[] | null,
    setSelected: React.Dispatch<React.SetStateAction<HttpExchange | null>>,
}


export default function RequestTable({ requests, setSelected }: RequestTableProps) {

    return (
        <Table
            columns={[
                { label: 'ID', width: 'w-10' },
                { label: 'Time', width: 'w-24' },
                { label: 'Method', width: 'w-10' },
                { label: 'URL', width: 'w-[300px]' },
                { label: 'Status', width: 'w-10' },
                { label: 'Length', width: 'w-24' },
            ]}
            requests={requests}
            onSelect={setSelected}
        />
    )
} 