const express = require('express'); // Importa o framework Express para criar o servidor.
const fs = require('fs'); // Módulo para manipular o sistema de arquivos.
const path = require('path'); // Módulo para lidar com caminhos de arquivos.

const app = express(); // Cria uma instância do aplicativo Express.

// Middleware para processar o corpo das requisições como JSON.
app.use(express.json());

// Middleware para servir arquivos estáticos da pasta "public".
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal: serve o arquivo HTML inicial.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para servir a página "pagina1.html".
app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'create.html'));
});

// Rota para servir a página "home.html".
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'menu.html'));
});

// Rota para servir a página "capsPage.html".
app.get('/letter', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'letter.html'));
});

// Rota para servir a página "loginPage.html".
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota para obter dados do arquivo JSON localizado em "data/data.json".
app.get('/dados', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', (err, data) => {
        if (err) {
            // Retorna erro 500 se houver problema ao ler o arquivo.
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }
        res.json(JSON.parse(data)); // Envia o conteúdo do arquivo JSON como resposta.
    });
});

// Rota para salvar novos dados no arquivo JSON.
app.post('/salvar', (req, res) => {
    const novosDados = req.body.data; // Obtém os dados enviados no corpo da requisição.
    const pathern = req.body.pathern; // Obtém o caminho do arquivo enviado no corpo da requisição.

    console.log('Dados recebidos:', novosDados); // Log para depuração.

    // Verifica se os dados recebidos são válidos.
    if (!novosDados || typeof novosDados !== 'object') {
        return res.status(400).send('Dados inválidos'); // Retorna erro 400 se os dados forem inválidos.
    }

    // Caminho completo para o arquivo JSON.
    const filePath = path.join(__dirname, 'data', pathern);

    // Lê o conteúdo atual do arquivo JSON.
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Retorna erro 500 se houver problema ao ler o arquivo.
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }

        const dadosAtuais = JSON.parse(data); // Converte os dados existentes em um objeto.
        dadosAtuais.push(novosDados); // Adiciona os novos dados ao array existente.

        // Escreve os dados atualizados de volta no arquivo JSON.
        fs.writeFile(filePath, JSON.stringify(dadosAtuais, null, 2), (err) => {
            if (err) {
                // Retorna erro 500 se houver problema ao gravar os dados.
                return res.status(500).send('Erro ao salvar os dados no arquivo');
            }
            res.status(200).send('Dados salvos com sucesso'); // Resposta de sucesso.
        });
    });
});

// Rota para obter os dados do arquivo JSON de usuários localizado em "data/users.json".
app.get('/dadosUsers', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'users.json'), 'utf8', (err, data) => {
        if (err) {
            // Retorna erro 500 se houver problema ao ler o arquivo.
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }
        res.json(JSON.parse(data)); // Envia o conteúdo do arquivo JSON como resposta.
    });
});

// Inicia o servidor na porta especificada.
const PORT = 3000; // Define a porta para o servidor.
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`); // Log informando que o servidor está ativo.
});
