var estaLogado = false; // Variável que controla o estado de login

// Função para realizar o login do usuário
function logar() {
    var campoNome = document.getElementById('nome'); // Obtém o campo de entrada do nome
    var campoSenha = document.getElementById('senha'); // Obtém o campo de entrada da senha

    var nome = campoNome.value; // Armazena o valor do nome inserido
    var senha = campoSenha.value; // Armazena o valor da senha inserida

    var infos = JSON.parse(localStorage.getItem('usuario')); // Recupera e analisa os dados de usuário do localStorage

    // Verifica se há usuários registrados
    if (infos === null) {
        alert("Sem usuários registrados, Registre-se primeiro");
        window.location.href = "registrar.html"; // Redireciona para a página de registro
    } else {
        // Verifica se o nome e senha correspondem a um usuário registrado
        infos.forEach(function (info) {
            if (info.nome == nome && info.senha == senha) {
                alert('Você foi logado!!');
                localStorage.setItem('Logado', nome); // Armazena o nome do usuário como logado no localStorage
                window.location.href = "loja/loja.html"; // Redireciona para a página principal após login
                estaLogado = true; // Define a variável de login como verdadeira
                // A alteração para true no estaLogado serve como uma quebra de looping e uma condição atendidade ocorrendo a quebra de forEach.
            }
        });
        if (!estaLogado) {
            alert("Não existe usuário com esse nome ou errou a senha!!"); // Alerta se o login falhar
        }
    }
}

let informacoes = []; // Array para armazenar informações de novos usuários
let dados; // Variável para armazenar os dados de usuários existentes
var usuarioExiste = false; // Variável para verificar se o usuário já existe

// Função para registrar um novo usuário
function registrar() {
    var campoNome = document.getElementById('nome'); // Obtém o campo de entrada do nome
    var campoSenha = document.getElementById('senha'); // Obtém o campo de entrada da senha
    var campoConfirmarSenha = document.getElementById('confirmar-senha'); // Obtém o campo de confirmação de senha

    var nomevalor = campoNome.value; // Armazena o valor do nome inserido
    var senhavalor = campoSenha.value; // Armazena o valor da senha inserida
    var ConfSenhavalor = campoConfirmarSenha.value; // Armazena o valor da confirmação de senha

    // Verifica se a senha e a confirmação de senha coincidem
    if (senhavalor == ConfSenhavalor) {

        var json = localStorage.getItem('usuario'); // Obtém os dados de usuário do localStorage

        if (!json) {
            localStorage.removeItem('usuario'); // Remove o item de usuário se não existir
        }

        dados = JSON.parse(localStorage.getItem('usuario')); // Analisa os dados de usuário do localStorage


        if (dados === null || dados == "" || dados == undefined) {
            informacoes = [
                {
                    nome: nomevalor,
                    senha: senhavalor,
                    lista: [],
                    numeros: []
                }
            ];

            localStorage.setItem('usuario', JSON.stringify(informacoes)); // Salva as informações do novo usuário no localStorage
        } else {
            // Verifica se o nome de usuário já existe
            dados.forEach(function (dado) {
                if (dado.nome == nomevalor) {
                    alert("Este usuário já existe");
                    usuarioExiste = true; // Define a variável para indicar que o usuário existe
                    // ocorre novamente a mesma função de quebra de forEach caso uma condição tenha sido atendida
                    window.location.href = "index.html"; // Redireciona para a página de login
                }
            });
            // Adiciona um novo usuário se não existir um com o mesmo nome
            if (!usuarioExiste) {
                alert("Você foi registrado, vamos logar!"); // Alerta de sucesso no registro
                dados.push({ nome: nomevalor, senha: senhavalor, lista: [], numeros: [] }); // Adiciona o novo usuário aos dados existentes
                localStorage.setItem('usuario', JSON.stringify(dados)); // Atualiza os dados de usuário no localStorage
                window.location.href = "index.html"; // Redireciona para a página de login após concluir o registro
            }
        }

    } else {
        alert("As senhas não coincidem");
    } if (senhavalor == "" || nomevalor == "") {
        alert("Por favor preencha todos os campos!!");
    }
}