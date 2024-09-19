// arra vazio para armazenar os usuarios que serao os Vendedores
let usuariosVendedor = [];
let listaVendedor = localStorage.getItem('usuariosVendedor');
usuariosVendedor = JSON.parse(listaVendedor) || [];

if (usuariosVendedor == null) {
    usuariosVendedor = [];
}

//funcao para fazer o cadastro do usuario
function cadastroVendedor() {
    function verificarloginExistente() {
        return usuariosVendedor.some(Vendedor => Vendedor.login === loginVendedor);
    }

    let nomeVendedor = document.getElementById('nomeVendedor').value;
    let loginVendedor = document.getElementById('loginVendedor').value;
    let senhaVendedor = document.getElementById('senhaVendedor').value;

    verificarloginExistente()

    //verificar se as areas estao preechidas corretamente
    if (nomeVendedor && loginVendedor && senhaVendedor) {
        if (verificarloginExistente(loginVendedor)) {
            alert("Usuário já existe, tente outro!");
            return;
        }

        let Vendedor = {
            nome: nomeVendedor,
            login: loginVendedor,
            senha: senhaVendedor,
            produtos:[]
        };

        if (Vendedor == null) {
            let VendedorN = {
                nome: nomeVendedor,
                login: loginVendedor,
                senha: senhaVendedor,
                produtos:[]
            };

            Vendedor = VendedorN;
        }

        //adicionar novo Vendedor a lista de Vendedor
    usuariosVendedor.push(Vendedor);

    //Limpar os campos de entrada
    document.getElementById('nomeVendedor').value = '';
    document.getElementById('loginVendedor').value = '';
    document.getElementById('senhaVendedor').value = '';

    //Salva o array na própria página
    localStorage.setItem('usuariosVendedor', JSON.stringify(usuariosVendedor));

    listaVendedor = localStorage.getItem('usuariosVendedor');

    usuariosVendedor = JSON.parse(listaVendedor);

    alert("Usuário Cadastrado com sucesso!");
    } else {
        alert("Preencha todos os campos!");
    }
    
    console.log(usuariosVendedor);
}

function loginVendas() {
    let nomeVendedor = document.getElementById('nomeVendedor').value;
    let loginVendedor = document.getElementById('loginVendedor').value;
    let senhaVendedor = document.getElementById('senhaVendedor').value;
    
    if (loginVendedor && senhaVendedor && nomeVendedor) {
        let loginExistente = usuariosVendedor.find(Vendedor => Vendedor.login === loginVendedor && Vendedor.senha === senhaVendedor && Vendedor.nome === nomeVendedor);

        if (loginExistente) {
            let vendedorLogado = loginExistente;
            localStorage.setItem('vendedorLogado', JSON.stringify(vendedorLogado));
            window.location.href = "vendedor/adicionarProdutos.html";
        } else {
            alert("Dados Incorretos ou usuário inexistente");
        }
    }
}

function verificarloginExistente() {
    return usuariosVendedor.some(Vendedor => Vendedor.login === loginVendedor);
}