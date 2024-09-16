// Primeiro Passo: Criar um array para armazenar os produtos
const produtos = [];
 
// Criar uma função para adicionar os produtos
function addProduto() {      
    let nomeProduto = document.getElementById('nome-produto').value;
    let precoProduto = document.getElementById('preco-produto').value;    
 
    // Verificar se os campos estão preenchidos
    if (nomeProduto && precoProduto) {
        let produto = {
            nome: nomeProduto,
            preco: precoProduto
        };
        // Adicionar o produto dentro do array usando o método push()
        produtos.push(produto);
        // Atualizar a lista de produtos e mostrar:
        displayProdutos();
        // Limpar os campos de entrada
        document.getElementById('nome-produto').value = '';
        document.getElementById('preco-produto').value = '';
    }
}
 
// Criar uma nova função para exibir os produtos na tabela
function displayProdutos() {
    const listaProdutos = document.getElementById('lista-produto');
    listaProdutos.innerHTML = '';
 
    produtos.forEach(function(produto) {
        const row = listaProdutos.insertRow();
       
        const cell1 = row.insertCell(0);
        cell1.textContent = produto.nome;
 
        const cell2 = row.insertCell(1);
        cell2.textContent = produto.preco;        
    });
}
 
// Capturar os dados do formulário de cadastro
const formProduto = document.getElementById('produto-form');
 
// Botão para submeter os dados do formulário. O addEventListener é um escutador de evento
formProduto.addEventListener('submit', function(e){
    e.preventDefault(); // Essa ação irá evitar que a página seja recarregada automaticamente.
    addProduto(); // Correção aqui: adicionar parênteses para chamar a função
});