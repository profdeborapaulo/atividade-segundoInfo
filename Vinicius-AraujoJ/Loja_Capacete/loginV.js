// Array vazio para armazenar os vendedores cadastrados
let usuariosVendedor = [];

// Recupera os vendedores salvos no localStorage (se houver)
let listaVendedor = localStorage.getItem('usuariosVendedor');

// Se houver dados, converte de volta para um array, ou inicializa um array vazio
usuariosVendedor = JSON.parse(listaVendedor) || [];

if (usuariosVendedor == null) {
    usuariosVendedor = [];
}

// Função para cadastrar um novo vendedor
function cadastroVendedor() {
    
    // Função para verificar se o login já existe
    function verificarloginExistente() {
        return usuariosVendedor.some(Vendedor => Vendedor.login === loginVendedor);
    }

    // Pega os valores inseridos nos campos de cadastro
    let nomeVendedor = document.getElementById('nomeVendedor').value;
    let loginVendedor = document.getElementById('loginVendedor').value;
    let senhaVendedor = document.getElementById('senhaVendedor').value;

    verificarloginExistente();

    // Verifica se todos os campos foram preenchidos
    if (nomeVendedor && loginVendedor && senhaVendedor) {
        
        // Verifica se o login já foi usado
        if (verificarloginExistente(loginVendedor)) {
            alert("Usuário já existe, tente outro!");
            return;
        }

        // Cria um objeto para o novo vendedor
        let Vendedor = {
            nome: nomeVendedor,
            login: loginVendedor,
            senha: senhaVendedor,
            produtos: [] // Lista de produtos que o vendedor poderá adicionar depois
        };

        // Caso o objeto "Vendedor" seja nulo (não comum), recria o objeto
        if (Vendedor == null) {
            let VendedorN = {
                nome: nomeVendedor,
                login: loginVendedor,
                senha: senhaVendedor,
                produtos: []
            };
            Vendedor = VendedorN;
        }

        // Adiciona o novo vendedor ao array de vendedores
        usuariosVendedor.push(Vendedor);

        // Limpa os campos de cadastro para o próximo uso
        document.getElementById('nomeVendedor').value = '';
        document.getElementById('loginVendedor').value = '';
        document.getElementById('senhaVendedor').value = '';

        // Salva o array de vendedores atualizado no localStorage
        localStorage.setItem('usuariosVendedor', JSON.stringify(usuariosVendedor));

        // Recupera a lista atualizada de vendedores do localStorage
        listaVendedor = localStorage.getItem('usuariosVendedor');
        usuariosVendedor = JSON.parse(listaVendedor);

        // Alerta de sucesso
        alert("Usuário Cadastrado com sucesso!");
    } else {
        // Alerta se algum campo não foi preenchido
        alert("Preencha todos os campos!");
    }
    
    // Exibe os vendedores no console para conferência
    console.log(usuariosVendedor);
}

// Função para login do vendedor
function loginVendas() {
    // Pega os valores inseridos nos campos de login
    let nomeVendedor = document.getElementById('nomeVendedor').value;
    let loginVendedor = document.getElementById('loginVendedor').value;
    let senhaVendedor = document.getElementById('senhaVendedor').value;
    
    // Verifica se todos os campos de login foram preenchidos
    if (loginVendedor && senhaVendedor && nomeVendedor) {

        // Verifica se há algum vendedor com as credenciais corretas
        let loginExistente = usuariosVendedor.find(Vendedor => 
            Vendedor.login === loginVendedor && 
            Vendedor.senha === senhaVendedor && 
            Vendedor.nome === nomeVendedor
        );

        // Se as credenciais estão corretas, salva o vendedor logado e redireciona para a página de adicionar produtos
        if (loginExistente) {
            let vendedorLogado = loginExistente;
            localStorage.setItem('vendedorLogado', JSON.stringify(vendedorLogado));
            window.location.href = "vendedor/adicionarProdutos.html";
        } else {
            // Alerta de erro
            alert("Dados Incorretos ou usuário inexistente");
        }
    }
}

// Função para verificar se o login já existe no sistema
function verificarloginExistente() {
    return usuariosVendedor.some(Vendedor => Vendedor.login === loginVendedor);
}
