import { useState } from 'react'
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import RequestList from "../components/RequestList";
import RequestDetail from '../components/RequestDetail';
import type { HttpRequest } from "../types/requests";

export default function App() {
  const [selectedRequest, setSelectedRequest] = useState<HttpRequest | null>(null);

  return (
    <div className="h-screen flex flex-col bg-[#0a0909] text-gray-100">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex flex-1">
          <RequestList onSelect={setSelectedRequest} />
          <RequestDetail request={selectedRequest} />
        </div>
      </div>
    </div>
  );
}
