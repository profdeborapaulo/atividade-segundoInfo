// arra vazio para armazenar os usuarios que serao os clientes
let usuariosClientes = [];
let listaClientes = localStorage.getItem('usuariosClientes');
usuariosClientes = JSON.parse(listaClientes);

if (usuariosClientes == null) {
    usuariosClientes = [];
}

//funcao para fazer o cadastro do usuario
function cadastroCliente() {
    function verificarloginExistente() {
        return usuariosClientes.some(cliente => cliente.login === loginCliente);
    }

    let nomeCliente = document.getElementById('nomeCliente').value;
    let loginCliente = document.getElementById('loginCliente').value;
    let senhaCliente = document.getElementById('senhaCliente').value;

    //verificar se as areas estao preechidas corretamente
    if (nomeCliente && loginCliente && senhaCliente) {
        if (verificarloginExistente(loginCliente)) {
            alert("Usuário já existe, tente outro!");
            return;
        }

        let cliente = {
            nome: nomeCliente,
            login: loginCliente,
            senha: senhaCliente,
            carrinho: []
        };

        //adicionar novo cliente a lista de clientes
    usuariosClientes.push(cliente);

    //Limpar os campos de entrada
    document.getElementById('nomeCliente').value = '';
    document.getElementById('loginCliente').value = '';
    document.getElementById('senhaCliente').value = '';

    //Salva o array na própria página
    localStorage.setItem('usuariosClientes', JSON.stringify(usuariosClientes));

    listaClientes = localStorage.getItem('usuariosClientes');

    usuariosClientes = JSON.parse(listaClientes);

    alert("Usuário Cadastrado com sucesso!");
    } else {
        alert("Preencha todos os campos!");
    }
    
    console.log(usuariosClientes);
}

function loginUsuario() {
    let nomeCliente = document.getElementById('nomeCliente').value;
    let loginCliente = document.getElementById('loginCliente').value;
    let senhaCliente = document.getElementById('senhaCliente').value;
    
    if (loginCliente && senhaCliente && nomeCliente) {
        let loginExistente = usuariosClientes.find(cliente => cliente.login === loginCliente && cliente.senha === senhaCliente && cliente.nome === nomeCliente);

        if (loginExistente) {
            let clienteLogado = loginExistente;
            localStorage.setItem('clienteLogado', JSON.stringify(clienteLogado));
            window.location.href = "cliente/home.html";
        } else {
            alert("Dados Incorretos ou usuário inexistente");
        }
    }
}

