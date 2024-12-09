const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { sendToGemini } = require("./server/gemini.js"); // Importando a função de gemini (caso precise usar no backend)

const app = express();
const PORT = 3000;

// Middleware para o corpo da requisição em JSON
app.use(bodyParser.json());

// Configurando a pasta pública para arquivos estáticos
app.use(express.static("public"));

// Rota para o index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "index.html"));
});

// Rota para o choose.html
app.get("/escolha", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "choose.html"));
});

// Rota para o chat.html
app.get("/chat", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "chat.html"));
});

// Endpoint para interação com a Gemini (chamado diretamente pelo frontend)
app.post("/chat", async (req, res) => {
    const { persona, msg } = req.body; // Recebe a persona e mensagem do frontend
    try {
        const response = await sendToGemini(persona, msg); // Chama a função Gemini
        console.log("Resposta da Gemini:", response);
        res.json({ response }); // Retorna a resposta para o frontend
    } catch (error) {
        console.error("Erro ao chamar sendToGemini:", error);
        res.status(500).json({ response: "Erro ao se comunicar com a IA." });
    }
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});