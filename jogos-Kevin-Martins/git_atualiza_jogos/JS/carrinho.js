// Função para verificar se o documento está pronto e executar a função de inicialização
function init() {
    // Verifica se estamos na página inicial ou na página do carrinho
    if (window.location.pathname.includes("inicial.html")) {
        configurarPaginaInicial();
    } else if (window.location.pathname.includes("carrinho.html")) {
        configurarPaginaCarrinho();
    }
}

// Configura a página inicial
function configurarPaginaInicial() {
    // Adiciona eventos aos botões de adicionar
    const adicionarButtons = document.getElementsByClassName("button");
    for (let i = 0; i < adicionarButtons.length; i++) {
        adicionarButtons[i].addEventListener("click", botaoDeAdicionar);
    }
}

// Configura a página do carrinho
function configurarPaginaCarrinho() {
    // Carrega os itens do localStorage
    carregarCarrinho();

    // Adiciona eventos aos botões de remover
    updateRemoveButtons();
}

// Função chamada quando um botão de adicionar é clicado
function botaoDeAdicionar(event) {
    const button = event.target;
    const card = button.closest(".card");

    if (!card) {
        console.error("Nao foi possível adicionar no carrinho"); //retorna um erro caso os campos nao sejam preencidos
        return;
    }

    const imagem = card.querySelector(".img").style.backgroundImage.slice(5, -2).replace(/"/g, '');
    const titulo = card.querySelector(".titulo").innerText;    // busca as informações do item no form
    const preco = card.querySelector(".preco").innerText;

    // Cria um objeto para o produto
    const produto = {
        imagem: imagem,
        titulo: titulo,
        preco: preco
    };

    // Adiciona o produto ao localStorage
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Redireciona para a página do carrinho
    window.location.href = "carrinho.html";
}

// Função para carregar os itens do localStorage na página do carrinho
function carregarCarrinho() {
    const cartItems = document.getElementById("cartItems");
    if (!cartItems) {
        console.error("Element with id 'cartItems' not found");
        return;
    }

    // Obtém os itens do localStorage
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Adiciona os itens ao carrinho
    cartItems.innerHTML = ""; // Limpa o conteúdo atual
    carrinho.forEach((item, index) => {
        const novoProduto = document.createElement("li");
        novoProduto.classList.add("jogo-item");
        novoProduto.innerHTML = `
            <div class="img" style="background-image: url(${item.imagem});"></div>
            <div class="conteudo">
                <span class="titulo">${item.titulo}</span>
                <span class="produtoatt">${item.preco}</span>
            </div>
            <button type="button" class="remover" data-index="${index}">Remover</button>
        `;

        cartItems.appendChild(novoProduto);
    });

    updateTotal();
}

// Função para remover um item do carrinho
function removerProduto(event) {
    const button = event.target;
    const index = button.getAttribute("data-index");

    // Obtém os itens do localStorage
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Remove o item com base no índice
    if (index !== null && index >= 0 && index < carrinho.length) {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    // Atualiza a lista de produtos no carrinho
    carregarCarrinho();
}

// Função para atualizar a lista de botões de remover
function updateRemoveButtons() {
    const removerButtons = document.getElementsByClassName("remover");
    for (let i = 0; i < removerButtons.length; i++) {
        removerButtons[i].addEventListener("click", removerProduto);
    }
}

// Função para atualizar o total do carrinho
function updateTotal() {
    let totalCarrinho = 0;
    const produtos = document.getElementsByClassName("jogo-item");
    for (let i = 0; i < produtos.length; i++) {
        const precoElement = produtos[i].querySelector(".produtoatt");
        if (precoElement) {
            const preco = parseFloat(precoElement.innerText.replace("R$", "").replace(",", "."));
            totalCarrinho += preco;
        }
    }
    const totalElement = document.querySelector(".total");
    if (totalElement) {
        totalElement.innerText = "Total: R$" + totalCarrinho.toFixed(2);
    } else {
        console.error("Total element not found");
    }
}

// Espera o documento estar completamente carregado
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
