// Recuperar os dados do usuario logado
let clienteLogado = JSON.parse(localStorage.getItem('clienteLogado'));

if (clienteLogado) {
    document.getElementById('nomeScliente').innerText = clienteLogado.nome;
}

function encerrrarSessao(){
    history.back();
}

let usuariosVendedor = [];
let listaVendedor = localStorage.getItem('usuariosVendedor');
usuariosVendedor = JSON.parse(listaVendedor) || [];

if (usuariosVendedor == null) {
    usuariosVendedor = [];
}

// arra vazio para armazenar os produtos que serao os Vendedores
let produtosVendedor = [];
let listaGeralProdutos = localStorage.getItem('produtosVendedor');
produtosVendedor = JSON.parse(listaGeralProdutos) || [];

if (produtosVendedor == null) {
    produtosVendedor = [];
}

renderizarProdutosTodosVendedores();
renderizarCarrinho();

function renderizarProdutosTodosVendedores() {
    document.getElementById('todos-produtos').innerHTML = '';
    let Produtos = produtosVendedor;
    Produtos.forEach(produto => {
        document.getElementById('todos-produtos').innerHTML += 
        `<div class="produto">
        <div class="informacoes-produto">
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
        <input class="bt-adicionar" type="button" value="ADICIONAR" onclick="carrinhoADD('${produto.nome}')">
        </div>
        </div>
        </div>
        <br>`;
    });
}

function carrinhoADD(produto) {
    let produtoADD = produto;
    clienteLogado.carrinho.push(produtoADD); 
    localStorage.setItem('clienteLogado', JSON.stringify(clienteLogado));
    renderizarCarrinho();
    alert("Produto adicionado ao CARRINHHO!");
}

function renderizarCarrinho() {
    document.getElementById('adicionados-carrinho').innerHTML = '';
    let Produtos = produtosVendedor;
    Produtos.forEach(produto => {
        document.getElementById('adicionados-carrinho').innerHTML += 
        `<div class="produto">
        <div class="informacoes-produto">
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
        <input class="bt-apagar" type="button" value="Remover" onclick="removerCarrinho('${produto.nome}')">
        </div>
        </div>
        </div>
        <br>`;
    });

}