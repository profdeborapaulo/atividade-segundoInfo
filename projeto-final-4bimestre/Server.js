const express = require('express');
const fs = require('fs');
const path = require('path');
 
const app = express();

const cors = require('cors');
app.use(cors()); //permite requisições de outras origens

 
//middleware para processar o corpo das requisições como JSON
app.use(express.json());
 
//servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));
 
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'index.html'));
        });
        
        app.get('/product-page', (req, res) => {
            res.sendFile(path.join(__dirname, 'html', 'product-page.html'));
        });
        
        app.get('/add-product', (req, res) => {
            res.sendFile(path.join(__dirname, 'html', 'add-product.html')); 
        });
        
 
 
//rota para obter os dados do arquivo JSON
app.get('/dados', (req, res) => {
    fs.readFile(path.join(__dirname, 'database', 'products.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }
        res.json(JSON.parse(data)); //envia os dados em formato JSON
    });
});
 
 
 
//rota para salvar novos dados no arquivo JSON
app.post('/salvar', (req, res) => {
    const novosDados = req.body.data; //captura o dado enviado no corpo da requisição
   
    console.log('Dados recebidos:', novosDados); //verifica o dado arquirido

    //validar se os dados recebidos são válidos
    if (!novosDados || typeof novosDados !== 'object') {
        return res.status(400).send('Dados inválidos');
    }
 
    //lê os dados existentes no arquivo JSON
    const filePath = path.join(__dirname, 'database', 'products.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }
 
        const dadosAtuais = JSON.parse(data); //parse dos dados existentes
        dadosAtuais.push(novosDados); //adiciona o novo dado ao array
 
        //grava os dados atualizados no arquivo JSON
        fs.writeFile(filePath, JSON.stringify(dadosAtuais, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Erro ao salvar os dados no arquivo');
            }
            res.status(200).send('Dados salvos com sucesso');
        });
    });
});
 
 
//inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//comando para executar: node Server.js
