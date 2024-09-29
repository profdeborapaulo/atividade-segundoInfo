// Recuperar os dados do usuário logado do localStorage e convertê-los para um objeto
let clienteLogado = JSON.parse(localStorage.getItem('clienteLogado'));

// Verifica se há um cliente logado. Se sim, exibe o nome do cliente no elemento HTML
if (clienteLogado) {
    document.getElementById('nomeScliente').innerText = clienteLogado.nome;
}

// Verifica se o carrinho do cliente já existe. Se não, inicializa um carrinho vazio
if (!clienteLogado.carrinho) {
    clienteLogado.carrinho = [];
}

// Função para encerrar a sessão do usuário e voltar à página anterior
function encerrrarSessao(){
    history.back();  // Utiliza a função de histórico do navegador para retornar à página anterior
}

// Renderiza o carrinho de compras do cliente ao carregar a página
renderizarCarrinho();

// Função para exibir os produtos no carrinho
function renderizarCarrinho() {
    // Limpa o conteúdo atual do carrinho na página
    document.getElementById('carrinho').innerHTML = '';

    // Atribui o carrinho do cliente logado a uma variável local
    let carrinhoAtual = clienteLogado.carrinho;
    console.log("Carrinho", carrinhoAtual);

    // Verifica se o carrinho contém produtos
    if (carrinhoAtual && carrinhoAtual.length > 0) {
        // Para cada produto no carrinho, cria uma estrutura HTML e exibe os detalhes
        carrinhoAtual.forEach(produtoAdd => {
            console.log(produtoAdd);  // Exibe o produto no console para fins de depuração
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
            <div class="centralizar-bt">
            <!-- Botão para remover o produto, acionando a função apagarProduto -->
            <input class="bt-apagar" type="button" value="APAGAR" onclick="apagarProduto('${produtoAdd.nome}')">
            </div>
            </div>
            </div>
            <br>`;
        });
    } else {
        // Se o carrinho estiver vazio, exibe uma mensagem informando e um link para voltar às compras
        document.getElementById('carrinho').innerHTML = '<p>O carrinho está vazio. <a href="home.html">Ir às compras</a></p>';
    }
}

// Função para remover um produto específico do carrinho
function apagarProduto(nomeProduto) {
    // Filtra o carrinho removendo o produto com o nome correspondente
    clienteLogado.carrinho = clienteLogado.carrinho.filter(produto => produto.nome !== nomeProduto);
    
    // Atualiza o localStorage com o carrinho atualizado
    localStorage.setItem('clienteLogado', JSON.stringify(clienteLogado));
    
    // Re-renderiza o carrinho para refletir a remoção do produto
    renderizarCarrinho();
}