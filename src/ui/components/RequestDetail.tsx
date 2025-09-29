import type { HttpRequest } from "../types/requests.ts";

interface Props {
  request: HttpRequest | null;
}

export default function RequestDetail({ request }: Props) {
  if (!request) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Selecione uma request para ver os detalhes
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 space-y-3">
      <h2 className="text-lg font-semibold text-gray-700">Detalhes</h2>

      <div className="bg-gray-900 p-3 rounded-md">
        <p>
          <span className="font-bold">Método:</span> {request.method}
        </p>
        <p>
          <span className="font-bold">URL:</span> {request.url}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 h-80">
        <textarea
          className="w-full h-full bg-gray-900 p-2 rounded-md font-mono text-sm"
          defaultValue={request.body ?? "// Request body aqui"}
        />
        <textarea
          className="w-full h-full bg-gray-900 p-2 rounded-md font-mono text-sm"
          defaultValue={request.response ?? "// Response body aqui"}
        />
      </div>
    </div>
  );
}
