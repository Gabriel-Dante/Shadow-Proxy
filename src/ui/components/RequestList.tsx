import type { HttpRequest } from "../types/requests";


interface RequestListProps {
  onSelect: (req: HttpRequest) => void;
}

export default function RequestList({ onSelect }: RequestListProps) {
  // fake data por enquanto
  const requests: HttpRequest[] = [
    { id: 1, method: "GET", url: "http://example.com" },
    { id: 2, method: "POST", url: "http://api.local/login" },
  ];

  return (
    <div className="w-2/3 border-r border-gray-700 overflow-auto">
      <table className="w-full text-sm">
        <thead className="bg-#0a0909 border-gray-700 border-b">
          <tr>
            <th className="p-2 text-left">Method</th>
            <th className="p-2 text-left">URL</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr
              key={req.id}
              className="hover:bg-gray-800 cursor-pointer"
              onClick={() => onSelect(req)}
            >
              <td className="p-2">{req.method}</td>
              <td className="p-2">{req.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
