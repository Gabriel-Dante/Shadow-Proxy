export default function Sidebar() {
  return (
    <aside className="w-48 bg-[#0a0909] border-r border-gray-700 p-3 space-y-3">
      <button className="w-full text-left p-2 rounded-md hover:bg-gray-800">
        Requests
      </button>
      <button className="w-full text-left p-2 rounded-md hover:bg-gray-800">
        Config
      </button>
      <button className="w-full text-left p-2 rounded-md hover:bg-gray-800">
        Certificates
      </button>
    </aside>
  );
}