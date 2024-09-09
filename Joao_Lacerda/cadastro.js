// Primeiro Passo: Criar um array para armazenar os produtos
const produtos = [];

// Criar uma função para adicionar os produtos
function addProduto() {
    let nomeProduto = document.getElementById('nome-produto').value;
    let precoProduto = document.getElementById('preco-produto').value;
    let enderecoProduto = document.getElementById('endereco-produto').value;
    // Verificar se os campos estão preenchidos
    if (nomeProduto && precoProduto && enderecoProduto) {
        let produto = {
            nome: nomeProduto,
            preco: precoProduto,
            endereco: enderecoProduto
        };
        // Adicionar o produto dentro do array usando o método push()
        produtos.push(produto);
        // Atualizar a lista de produtos e mostrar
        displayProdutos();
        // Limpar os campos de entrada
        document.getElementById('nome-produto').value = '';
        document.getElementById('preco-produto').value = '';
        document.getElementById('endereco-produto').value = '';
    }
}

// Criar uma nova função para exibir os produtos da tabela
function displayProdutos() {
    const listaProdutos = document.getElementById('lista-produto');
    listaProdutos.innerHTML = '';

    produtos.forEach(function (produto) {
        const row = listaProdutos.insertRow();

        const cell1 = row.insertCell(0);
        cell1.textContent = produto.nome;

        const cell2 = row.insertCell(1);
        cell2.textContent = produto.preco;

        const cell3 = row.insertCell(2);
        cell3.textContent = produto.endereco;
    });
}

// Capturar os dados do formulário de cadastro
const formProduto = document.getElementById('produto-form');
// Botão para submeter os dados do formulário
formProduto.addEventListener('submit', function (e) {
    e.preventDefault(); // Essa ação irá evitar que a página seja recarregada automaticamente.
    addProduto(); // Chama a função addProduto
});
