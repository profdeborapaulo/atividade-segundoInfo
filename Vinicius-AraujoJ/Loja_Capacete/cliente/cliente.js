// Recupera os dados do cliente logado do localStorage e converte de volta para um objeto
let clienteLogado = JSON.parse(localStorage.getItem('clienteLogado'));

// Verifica se há um cliente logado. Se sim, exibe o nome do cliente no elemento HTML
if (clienteLogado) {
    document.getElementById('nomeScliente').innerText = clienteLogado.nome;
}

// Verifica se o carrinho do cliente já existe. Se não, inicializa um carrinho vazio
if (!clienteLogado.carrinho) {
    clienteLogado.carrinho = [];
}

// Função para encerrar a sessão e voltar à página anterior
function encerrrarSessao(){
    history.back();
}

// Array para armazenar os dados dos vendedores cadastrados
let usuariosVendedor = [];

// Recupera os vendedores do localStorage e converte para um array, ou inicializa um array vazio
let listaVendedor = localStorage.getItem('usuariosVendedor');
usuariosVendedor = JSON.parse(listaVendedor) || [];

if (usuariosVendedor == null) {
    usuariosVendedor = [];
}

// Array vazio para armazenar os produtos cadastrados pelos vendedores
let produtosVendedor = [];

// Recupera os produtos do localStorage e converte para um array, ou inicializa um array vazio
let listaGeralProdutos = localStorage.getItem('produtosVendedor');
produtosVendedor = JSON.parse(listaGeralProdutos) || [];

if (produtosVendedor == null) {
    produtosVendedor = [];
}

// Chama a função para renderizar os produtos de todos os vendedores
renderizarProdutosTodosVendedores();

// Chama a função para renderizar o carrinho do cliente
renderizarCarrinho();

// Função que exibe todos os produtos disponíveis, listados pelos vendedores
function renderizarProdutosTodosVendedores() {
    // Limpa o conteúdo do elemento onde os produtos serão exibidos
    document.getElementById('todos-produtos').innerHTML = '';
    
    let Produtos = produtosVendedor; // Atribui os produtos ao array local
    
    // Itera sobre cada produto para renderizá-lo na página
    Produtos.forEach(produto => {
        console.log(produto);
        document.getElementById('todos-produtos').innerHTML += 
        `<div class="produto">
        <div class="informacoes-produto" data-produto='${JSON.stringify(produto)}'>
        <div class="img-produto">
        <img class="imagemP" src="${produto.link}" alt="imagem-${produto.nome}">
        </div>    
        <h3>${produto.nome}</h3>
        <p>
        R$ ${produto.preco}
        <br>
        Tamanho: ${produto.tamanho}
        <br>
        Anunciante: ${produto.vendedor}
        </p>
        <div class="centralizar-bt">
        <input class="bt-adicionar" type="button" value="ADICIONAR" onclick="carrinhoADD(this.parentNode.parentNode.dataset.produto)">
        </div>
        </div>
        </div>
        <br>`;
    });
}

// Função que adiciona o produto selecionado ao carrinho do cliente
function carrinhoADD(produto) {
    let produtoAdd = JSON.parse(produto);  // Converte o produto de string para um objeto
    
    // Adiciona o produto ao carrinho do cliente logado
    clienteLogado.carrinho.push(produtoAdd);  
    
    // Atualiza o localStorage com as novas informações do cliente (incluindo o carrinho atualizado)
    localStorage.setItem('clienteLogado', JSON.stringify(clienteLogado));  
    
    alert("Produto adicionado ao carrinho!");  // Exibe uma mensagem de sucesso
    
    renderizarCarrinho();  // Atualiza a visualização do carrinho
}

// Função que exibe os produtos no carrinho do cliente logado
function renderizarCarrinho() {
    // Limpa o conteúdo do carrinho
    document.getElementById('carrinho').innerHTML = '';
    
    // Atribui o carrinho atual do cliente à variável local
    let carrinhoAtual = clienteLogado.carrinho;
    
    console.log("Carrinho", carrinhoAtual);
    
    // Verifica se há itens no carrinho
    if (carrinhoAtual && carrinhoAtual.length > 0) {
        // Itera sobre cada produto no carrinho para exibi-lo
        carrinhoAtual.forEach(produtoAdd => {
            console.log(produtoAdd);
            document.getElementById('carrinho').innerHTML += 
            `<div class="produto">
            <div class="informacoes-produto" data-produto='${JSON.stringify(produtoAdd)}'>
            <div class="img-Add">
            <img class="imagemP" src="${produtoAdd.link}" alt="imagem-${produtoAdd.nome}">
            </div>    
            <h3>${produtoAdd.nome}</h3>
            <p>
            R$ ${produtoAdd.preco}
            <br>
            Tamanho: ${produtoAdd.tamanho}
            <br>
            Anunciante: ${produtoAdd.vendedor}
            </p>
            </div>
            </div>
            <br>`;
        });
    } else {
        // Exibe uma mensagem se o carrinho estiver vazio
        document.getElementById('carrinho').innerHTML = '<p>O carrinho está vazio.</p>';
    }
}
