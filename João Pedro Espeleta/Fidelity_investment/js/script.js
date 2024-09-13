const produtos = [];

// Criar uma função para adicionar os produtos
function addProduto() {
    let nameInvest = document.getElementById('name-invest').value;
    let numberInvest = parseInt(document.getElementById('number-invest').value);
    let priceBuy = parseFloat(document.getElementById('price-buy').value);
    let priceCurrent = parseFloat(document.getElementById('price-current').value);
    let valorTotal = priceCurrent * numberInvest;
    let rentabilidade = ((priceCurrent - priceBuy) / priceBuy) * 100;

    // Verificar se os campos estão preenchidos
    if (nameInvest && numberInvest && priceBuy && priceCurrent && valorTotal) {
        let produto = {
            name: nameInvest,
            number: numberInvest,
            buy: priceBuy.toFixed(2),
            current: priceCurrent.toFixed(2),
            total: valorTotal.toFixed(2),
            rentabilidade: rentabilidade.toFixed(2) // Formatando a rentabilidade com 2 casas decimais
        };

        // Adicionar o produto dentro do array usando o método push()
        produtos.push(produto);

        // Atualizar a lista de produtos e mostrar:
        displayProdutos();

        // Limpar os campos de entrada
        document.getElementById('name-invest').value = '';
        document.getElementById('number-invest').value = '';
        document.getElementById('price-buy').value = '';
        document.getElementById('price-current').value = '';
    }
}

// Criar uma nova função para exibir produtos na tabela:
function displayProdutos() {
    const listaProdutos = document.getElementById('lista-produto');
    listaProdutos.innerHTML = '';

    produtos.forEach(function (produto) {
        const row = listaProdutos.insertRow();

        const cell1 = row.insertCell(0);
        cell1.textContent = produto.name;

        const cell2 = row.insertCell(1);
        cell2.textContent = produto.number;

        const cell3 = row.insertCell(2);
        cell3.textContent = "R$" + produto.buy;

        const cell4 = row.insertCell(3);
        cell4.textContent = "R$" + produto.current;

        const cell5 = row.insertCell(4);
        cell5.textContent = "R$" + produto.total;

        const cell6 = row.insertCell(5);
        cell6.textContent = produto.rentabilidade + "%";

        if (produto.rentabilidade > 0) {
            cell6.style.color = 'green';
        } else {
            cell6.style.color = 'red';
        }
    });
}

// Capturar os dados do formulário de cadastro
const formProduto = document.getElementById('form-invest');

// Botão para submeter os dados do formulário. O addEventListener é um escutador de evento
formProduto.addEventListener('submit', function (e) {
    e.preventDefault(); // Essa ação irá evitar que a página seja recarregada automaticamente.
    addProduto();
});
