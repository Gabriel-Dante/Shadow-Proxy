export default function SettingsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">⚙️ Configurações</h1>
      <p>Ajuste as preferências da aplicação aqui.</p>

      <form className="mt-4 space-y-4 max-w-sm">
        <div>
          <label className="block mb-1 text-sm">Nome do usuário</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Tema</label>
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            <option>Escuro</option>
            <option>Claro</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
