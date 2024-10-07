//função para adicionar o jogo ao carrinho
function addProduto(nome, preco, imagem) {
    // Pega o carrinho existente ou cria um novo se não houver
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    //adiciona o novo jogo
    carrinho.push({ 
        nome: nome, 
        preco: preco,
        imagem: imagem
    });

    //atualiza o localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nome} adicionado ao carrinho!`);
}

function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let listaCarrinho = document.getElementById('lista-carrinho');
    let total = 0;

    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `<img src="${item.imagem}"></img> ${item.nome} <br> R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

//chama a função quando a página é atualizada
window.onload = carregarCarrinho;