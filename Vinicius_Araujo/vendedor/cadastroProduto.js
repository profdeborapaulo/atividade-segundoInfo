// Recuperar os dados do vendedor logado
let vendedorLogado = JSON.parse(localStorage.getItem('vendedorLogado'));

if (vendedorLogado) {
    document.getElementById('nomeSVendedor').innerText = vendedorLogado.nome;
}
renderizarProdutos();

function encerrrarSessao(){
    history.back();
}

// arra vazio para armazenar os produtos que serao os Vendedores
let produtosVendedor = [];
let listaGeralProdutos = localStorage.getItem('produtosVendedor');
produtosVendedor = JSON.parse(listaGeralProdutos) || [];

if (produtosVendedor == null) {
    produtosVendedor = [];
}

//funcao para fazer o cadastro do usuario
function cadastroProduto() {
    let nomeVendedor = vendedorLogado.nome;
    let nomeProduto = document.getElementById('nome-produto').value;
    let precoProduto = document.getElementById('preco-produto').value;
    let linkProduto = document.getElementById('link-produto').value;
    let tamanhoProduto = document.getElementById('tamanho-produto').value;

    //verificar se as areas estao preechidas corretamente
    if (nomeVendedor && nomeProduto && precoProduto && linkProduto && tamanhoProduto) {
        let produto = {
            vendedor: nomeVendedor,
            nome: nomeProduto,
            preco: precoProduto,
            link: linkProduto,
            tamanho: tamanhoProduto
        };
        let listaVendedor = localStorage.getItem('usuariosVendedor');
        let usuariosVendedor = JSON.parse(listaVendedor) || [];
        console.log(usuariosVendedor);
        usuariosVendedor = usuariosVendedor.map(Vendedor => {
            if (Vendedor.login === vendedorLogado.login) {
                Vendedor.produtos.push(produto);
                produtosVendedor.push(produto);
                console.log(Vendedor.produtos);
                vendedorLogado = Vendedor;
                localStorage.setItem('produtosVendedor', JSON.stringify(produtosVendedor));
                console.log(produtosVendedor);
                localStorage.setItem('vendedorLogado', JSON.stringify(vendedorLogado));
                return Vendedor;
            }
        });
        renderizarProdutos();

        localStorage.setItem('usuariosVendedor', JSON.stringify(usuariosVendedor));

    //Limpar os campos de entrada
    document.getElementById('nome-produto').value = '';
    document.getElementById('preco-produto').value = '';
    document.getElementById('link-produto').value = '';
    document.getElementById('tamanho-produto').value = '';
    
    alert("Produto cadastrado com sucesso!");
    } else {
        alert("Preencha todos os campos!");
    }   
}

function renderizarProdutos() {
    document.getElementById('produtos-adicionados').innerHTML = '';
    let Produtos = vendedorLogado.produtos;
    Produtos.forEach(produto => {
        document.getElementById('produtos-adicionados').innerHTML += 
        `<div class="produto">
        <div class="informacoes-produto">
        <div class="img-produto">
        <img src="${produto.link}" alt="imagem-${produto.nome}">
        </div>    
        <h3>${produto.nome}</h3>
        <p>
        R$ ${produto.preco}
        <br>
        Tamanho: ${produto.tamanho}
        <br>
        Anunciante: ${vendedorLogado.nome}
        </p>
        <div class="centralizar-bt">
        <input class="bt-apagar" type="button" value="APAGAR" onclick="apagarProduto('${produto.nome}')">
        </div>
        </div>
        </div>
        <br>`;
    });
}

function apagarProduto(nomeProduto) {
    // Recuperar a lista de vendedores do localStorage
    let listaVendedor = localStorage.getItem('usuariosVendedor');
    let usuariosVendedor = JSON.parse(listaVendedor) || [];

    // Encontrar o vendedor logado
    usuariosVendedor = usuariosVendedor.map(Vendedor => {
        if (Vendedor.login === vendedorLogado.login) {
            // Encontrar o índice do produto que será removido
            let indiceProduto = Vendedor.produtos.findIndex(produto => produto.nome === nomeProduto);

            // Se o produto for encontrado, remover usando slice
            if (indiceProduto !== -1) {
                Vendedor.produtos.splice(indiceProduto, 1);
                produtosVendedor.splice(produtosVendedor.findIndex(produto => produto.nome === nomeProduto && produto.vendedor === vendedorLogado.nome))
                

                // Atualizar o vendedor logado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   fdz\ b    1q''''''''''''''''''''''                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    '                                                                                                                                                                                                                                   ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''            1q11qq1qq'                                          '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''                                                                                                                                                                                                                       1'  1   ''''''                          1qqqqqqqqqqqqqqqqqqqqqqq'   '   111qqq1111qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq   '''''                                                                                                                                                                                       ''''''''''''    '''''''                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    '
                vendedorLogado = Vendedor;
                localStorage.setItem('vendedorLogado', JSON.stringify(vendedorLogado));
                localStorage.setItem('produtosVendedor', JSON.stringify(produtosVendedor));
            }
        }
        return Vendedor;
    });

    // Atualizar a lista de vendedores no localStorage
    localStorage.setItem('usuariosVendedor', JSON.stringify(usuariosVendedor));

    // Re-renderizar os produtos para refletir a exclusão
    document.getElementById('produtos-adicionados').innerHTML = ''; // Limpar a lista de produtos antes de renderizar novamente

    renderizarProdutos();
    
    alert('Produto removido com sucesso!');
}

