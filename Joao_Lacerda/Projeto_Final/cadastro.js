// Primeiro Passo: Criar um array para armazenar os produtos
const produtos = [];

// Criar uma função para adicionar os produtos
function addProduto() {
    let precoProduto = document.getElementById('preco-produto').value;
    let modeloProduto = document.getElementById('modelo-produto').value;
    let marcaProduto = document.getElementById('marca-produto').value;
    let tamanhoProduto = document.getElementById('tamanho-produto').value;
    let corProduto = document.getElementById('cor-produto').value;
    // Verificar se os campos estão preenchidos
    if (precoProduto && modeloProduto && marcaProduto && tamanhoProduto && corProduto) {
        let produto = {
            preco: precoProduto,
            modelo: modeloProduto,
            marca: marcaProduto,
            tamanho: tamanhoProduto,
            cor: corProduto
        };
        // Adicionar o produto dentro do array usando o método push()
        produtos.push(produto);
        // Atualizar a lista de produtos e mostrar
        displayProdutos();
        // Limpar os campos de entrada
        document.getElementById('preco-produto').value = '';
        document.getElementById('modelo-produto').value = '';
        document.getElementById('marca-produto').value = '';
        document.getElementById('tamanho-produto').value = '';
        document.getElementById('cor-produto').value = '';
    }
}

// Criar uma nova função para exibir os produtos da tabela
function displayProdutos() {
    const listaProdutos = document.getElementById('lista-produto');
    listaProdutos.innerHTML = '';

    produtos.forEach(function (produto) {
        const row = listaProdutos.insertRow();

        const cell1 = row.insertCell(0);
        cell1.textContent = produto.preco;

        const cell2 = row.insertCell(1);
        cell2.textContent = produto.modelo;

        const cell3 = row.insertCell(2);
        cell3.textContent = produto.marca;

        const cell4 = row.insertCell(3);
        cell4.textContent = produto.tamanho;

        const cell5 = row.insertCell(4);
        cell5.textContent = produto.cor;
    });
}

// Capturar os dados do formulário de cadastro
const formProduto = document.getElementById('produto-form');
// Botão para submeter os dados do formulário
formProduto.addEventListener('submit', function (e) {
    e.preventDefault(); // Essa ação irá evitar que a página seja recarregada automaticamente.
    addProduto(); // Chama a função addProduto
});
