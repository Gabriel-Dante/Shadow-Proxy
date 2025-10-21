const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 }, () => {
  console.log("WebSocket rodando em ws://127.0.0.1:8082");
});

// Armazena todos os clientes conectados
const clients = new Set();

wss.on("connection", (ws) => {
  clients.add(ws);
  console.log("Novo cliente WS conectado");

  ws.on("close", () => {
    clients.delete(ws);
    console.log("Cliente WS desconectado");
  });
});

// Função para enviar dados a todos os clientes conectados
function broadcast(data) {
  const json = JSON.stringify(data);
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(json);
    }
  }
}

module.exports = { broadcast };
