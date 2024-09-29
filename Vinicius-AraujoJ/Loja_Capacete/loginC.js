// Array vazio para armazenar os clientes cadastrados
let usuariosClientes = [];

// Recupera os clientes salvos no localStorage (se houver)
let listaClientes = localStorage.getItem('usuariosClientes');

// Converte os dados de volta para um array ou inicializa um array vazio
usuariosClientes = JSON.parse(listaClientes);

if (usuariosClientes == null) {
    usuariosClientes = [];
}

// Função para cadastrar um novo cliente
function cadastroCliente() {

    // Função para verificar se o login já existe
    function verificarloginExistente() {
        return usuariosClientes.some(cliente => cliente.login === loginCliente);
    }

    // Pega os valores inseridos nos campos de cadastro
    let nomeCliente = document.getElementById('nomeCliente').value;
    let loginCliente = document.getElementById('loginCliente').value;
    let senhaCliente = document.getElementById('senhaCliente').value;

    // Verifica se todos os campos foram preenchidos
    if (nomeCliente && loginCliente && senhaCliente) {
        
        // Verifica se o login já foi usado
        if (verificarloginExistente(loginCliente)) {
            alert("Usuário já existe, tente outro!");
            return;
        }

        // Cria um objeto para o novo cliente
        let cliente = {
            nome: nomeCliente,
            login: loginCliente,
            senha: senhaCliente,
            carrinho: [] // Carrinho vazio que o cliente usará no futuro
        };

        // Adiciona o novo cliente ao array de clientes
        usuariosClientes.push(cliente);

        // Limpa os campos de cadastro para o próximo uso
        document.getElementById('nomeCliente').value = '';
        document.getElementById('loginCliente').value = '';
        document.getElementById('senhaCliente').value = '';

        // Salva o array de clientes no localStorage
        localStorage.setItem('usuariosClientes', JSON.stringify(usuariosClientes));

        // Atualiza a lista de clientes após o cadastro
        listaClientes = localStorage.getItem('usuariosClientes');
        usuariosClientes = JSON.parse(listaClientes);

        // Alerta de sucesso
        alert("Usuário Cadastrado com sucesso!");
    } else {
        // Alerta se algum campo não foi preenchido
        alert("Preencha todos os campos!");
    }
    
    // Exibe os clientes cadastrados no console para conferência
    console.log(usuariosClientes);
}

// Função para login do cliente
function loginUsuario() {
    // Pega os valores inseridos nos campos de login
    let nomeCliente = document.getElementById('nomeCliente').value;
    let loginCliente = document.getElementById('loginCliente').value;
    let senhaCliente = document.getElementById('senhaCliente').value;
    
    // Verifica se todos os campos de login foram preenchidos
    if (loginCliente && senhaCliente && nomeCliente) {
        
        // Verifica se há algum cliente com as credenciais corretas
        let loginExistente = usuariosClientes.find(cliente => 
            cliente.login === loginCliente && 
            cliente.senha === senhaCliente && 
            cliente.nome === nomeCliente
        );

        // Se as credenciais estão corretas, salva o cliente logado e redireciona para a página inicial do cliente
        if (loginExistente) {
            let clienteLogado = loginExistente;
            localStorage.setItem('clienteLogado', JSON.stringify(clienteLogado));
            window.location.href = "cliente/home.html";
        } else {
            // Alerta de erro se as credenciais estão incorretas
            alert("Dados Incorretos ou usuário inexistente");
        }
    }
}
