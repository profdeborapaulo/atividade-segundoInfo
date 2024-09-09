// backend node para cadastrar uma nova receita

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');  // importa o middleware cors

const app = express();
const port = 3000;

// configura o middleware CORS
app.use(cors({
    origin: 'http://localhost:8080'  // permite solicitações apenas desta origem
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const jsonFilePath = path.join(__dirname, 'receitas.json');

// rota para receber novos dados de receita
app.post('/add-receita', (req, res) => {
    const novaReceita = req.body;

    // le o arquivo JSON 
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON.');
        }

        const receitas = JSON.parse(data);

        // adiciona uma nova receita
        receitas.receitas.push(novaReceita);

        console.log(novaReceita);

        // escreve as novas receitas de volta no arquivo
        fs.writeFile(jsonFilePath, JSON.stringify(receitas, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Erro ao salvar a nova receita.');
            }
            res.status(200).send('Receita adicionada com sucesso!');
        });
    });
});

// usa o metodo GET para obter os dados de receitas
app.get('/receitas', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON.');
        }
        res.status(200).json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
