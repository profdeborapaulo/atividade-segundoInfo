const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/adicionar-receita', (req, res) => {
    const novaReceita = req.body;

    const filePath = path.join(__dirname, 'JS/receitas.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo JSON:', err);
            return res.status(500).send('Erro ao ler o arquivo JSON.');
        }

        // converte o receitas.json para um objeto 
        let receitas = JSON.parse(data);

        // adiciona a nova receita ao array 
        novaReceita.id = (receitas.receitas.length + 1).toString();  // adiciona um novo ID
        receitas.receitas.push(novaReceita);

        // converte o objeto de volta para JSON e grava no arquivo
        fs.writeFile(filePath, JSON.stringify(receitas, null, 4), (err) => {
            if (err) {
                console.error('Erro ao gravar no arquivo JSON:', err);
                return res.status(500).send('Erro ao gravar no arquivo JSON.');
            }

            console.log('Receita adicionada com sucesso!');
            res.status(200).send('Receita adicionada com sucesso!');
        });
    });
});

// inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
