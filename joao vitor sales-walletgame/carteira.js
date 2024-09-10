// Criar um array para armazenar os produtos (jogos e seus preços).
const produtos = [];

// Função para adicionar os produtos ao array e exibi-los
function addProduto() {
    // Pegar o valor dos campos de input do formulário
    let nomeProduto = document.getElementById('nome-produto').value;
    let precoProduto = parseFloat(document.getElementById('preco-produto').value);    

    // Verificar se os campos estão preenchidos
    if (nomeProduto && precoProduto) {
        // Criar um objeto produto com nome e preço
        let produto = {
            nome: nomeProduto,  // Atribui o nome do jogo ao objeto
            preco: precoProduto  // Atribui o preço ao objeto
        };
        // Adicionar o produto ao array de produtos
        produtos.push(produto);
        // Atualizar a lista de produtos na tabela
        displayProdutos();
        // Limpar os campos do formulário após adicionar
        document.getElementById('nome-produto').value = '';
        document.getElementById('preco-produto').value = '';
    }
}

// Função para exibir os produtos adicionados na tabela
function displayProdutos() {
    // Pegar a referência do corpo da tabela
    const listaProdutos = document.getElementById('lista-produto');
    // Limpar a tabela antes de exibir os produtos novamente
    listaProdutos.innerHTML = '';

    // Para cada produto no array, criar uma linha na tabela
    produtos.forEach(function(produto, index) {
        const row = listaProdutos.insertRow();  // Inserir uma nova linha
       
        const cell1 = row.insertCell(0);  // Inserir uma célula na coluna do nome
        cell1.textContent = produto.nome;  // Atribuir o nome do jogo à célula
 
        const cell2 = row.insertCell(1);  // Inserir uma célula na coluna do preço
        cell2.textContent = `R$ ${produto.preco.toFixed(2)}`;  // Atribuir o preço à célula

        const cell3 = row.insertCell(2); // Célula para o botão de deletar
        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'img/excluir.png';
        deleteIcon.alt= 'deletar'; 
        deleteIcon.classList.add ('lixeira-icone');
        deleteIcon.onclick = function() {
            deletarProduto(index);  // Chamar a função para deletar o produto
        };
        cell3.appendChild(deleteIcon);
    });

    // Atualizar o total de jogos e o valor total
    atualizarTotais();
}

// Função para deletar um produto pelo índice
function deletarProduto(index) {
    produtos.splice(index, 1);  // Remover o produto do array
    displayProdutos();  // Atualizar a exibição
}

// Função para atualizar o total de jogos e o valor total
function atualizarTotais() {
    const totalJogos = produtos.length;  // Contar o número total de jogos
    const totalGasto = produtos.reduce((total, produto) => total + produto.preco, 0);  // Somar o valor dos jogos

    // Atualizar os elementos no HTML
    document.getElementById('total-jogos').textContent = totalJogos;
    document.getElementById('total-gasto').textContent = totalGasto.toFixed(2);
}

// Capturar o formulário para adicionar os produtos
const formProduto = document.getElementById('produto-form');

// Adicionar um evento para escutar o clique no botão de envio do formulário
formProduto.addEventListener('submit', function(e){
    e.preventDefault();  // Evitar o recarregamento automático da página
    addProduto();  // Chamar a função para adicionar o produto
});
