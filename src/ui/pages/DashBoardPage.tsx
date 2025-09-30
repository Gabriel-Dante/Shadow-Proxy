export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📊 Dashboard</h1>
      <p>Bem-vindo ao painel principal! Aqui você pode ver estatísticas e atalhos.</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded">Card 1</div>
        <div className="bg-gray-800 p-4 rounded">Card 2</div>
        <div className="bg-gray-800 p-4 rounded">Card 3</div>
        <div className="bg-gray-800 p-4 rounded">Card 4</div>
      </div>
    </div>
  );
}