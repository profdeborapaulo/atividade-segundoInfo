function adcionarItem() {
    let i;
    let tamanhoEstoque = localStorage.length;
    let elemento = document.querySelector('main');
    for (i = 0; i <= tamanhoEstoque; i++) {
        let key = localStorage.key(i);
        let valorId = key.replace('estoque', '');
        let produtos = JSON.parse(localStorage.getItem(key));
        let nome = produtos.nome;
        let valor = produtos.preco; //Preço do produto
        let img = produtos.img;
        let quantidade = produtos.quantidade; //Quantidade de produtos
        let total = (valor * quantidade)

        let container = document.createElement('div');
        container.setAttribute('class', 'container2');

        container.innerHTML = `
            <img src="${img}" alt="4L">
            <div class="box1">
                <p>${nome}</p>
                <p>Preço unitário: R$ ${valor}</p>
                <p id="total${valorId}">Preço total: R$ ${total}</p>
            </div>
            <div class="compra">
                <button id="remover" onclick="removerCarrinho(${valorId})">Remover do carrinho</button>
                <div class="botoes">
                    <button id="aumentar" onclick="addValor(${valorId})">+</button>
                    <p id="numero${valorId}">${quantidade}</p>
                    <button id="diminuir" onclick="removeValor(${valorId})">-</button>
                </div>
            </div>
            `;

        elemento.appendChild(container);
    }
}

function removerCarrinho(id) {
    if (localStorage.getItem('estoque' + id)) {
        localStorage.removeItem('estoque' + id);
        alert("Você removeu este item do carrinho!");
        location.reload();
    }
}

function addValor(id) {
    let produtos = JSON.parse(localStorage.getItem('estoque' + id));
    let numero = document.getElementById('numero'+id);
    let total = document.getElementById('total'+id);
    let valor;
    let array = produtos;

    valor = parseInt(numero.textContent);
    array.quantidade++;
    valor++;
    numero.textContent = valor;

    let novoTotal = produtos.quantidade * produtos.preco;
    total.textContent = `Preço total: R$ ${novoTotal}`;

    localStorage.setItem('estoque' + id, JSON.stringify(array));
}

function removeValor(id) {
    let produtos = JSON.parse(localStorage.getItem('estoque' + id));
    let numero = document.getElementById('numero'+id);
    let total = document.getElementById('total'+id);
    let valor;
    let array = produtos;

    if (array.quantidade == 1) {
        alert("Você deve comprar no mínimo um, caso queira tirar o item aperte em remover do carrinho!");
    } else {
        array.quantidade--;
        valor = parseInt(numero.textContent);
        valor--;
        numero.textContent = valor;

        let novoTotal = produtos.quantidade * produtos.preco;
        total.textContent = `Preço total: R$ ${novoTotal}`;
    }
    localStorage.setItem('estoque' + id, JSON.stringify(array));
}

function finalizarCompra() {
    alert("Você fez a compra dos produtos!! Em breve será entregue em sua casa!");
    let i;
    let tamanhoEstoque = (localStorage.length)-1;
    for (i = tamanhoEstoque; i >= 0; i--) {
        let key = localStorage.key(i);
        let item = localStorage.getItem(key);
        if (key.startsWith('estoque')) {
            localStorage.removeItem(key);
        }
    }
    location.reload();
}