// Primeiro Passo: Criar um array para armazenar os produtos
const produtos = [];
 
// Criar uma função para adicionar os produtos
function addProduto() {      
    let nomeJogo = document.getElementById('nome-produto').value;
    let desenvolvedora = document.getElementById('des-produto').value;
    let imagem = document.getElementById('link-imagem').value;
    let precoJogo = document.getElementById('preco-produto').value;
 
    // Verificar se os campos estão preenchidos
    if (nomeJogo && desenvolvedora && imagem && precoJogo) {
        let produto = {
            nome: nomeJogo,
            desenvolvedora: desenvolvedora,
            imagem: imagem,
            preco: precoJogo
        };
        // Adicionar o produto dentro do array usando o método push()
        produtos.push(produto);
        displayProdutos(); // Atualizar a lista de produtos e mostrar:
        // Limpar os campos de entrada
        document.getElementById('nome-produto').value = '';
        document.getElementById('des-produto').value = '';
        document.getElementById('preco-produto').value = '';
    }
}
// Capturar os dados do formulário de cadastro
const formProduto = document.getElementById('produto-form');
 
// Botão para submeter os dados do formulário. O addEventListener é um escutador de evento
formProduto.addEventListener('submit', function(e){
    e.preventDefault(); // Essa ação irá evitar que a página seja recarregada automaticamente.
    addProduto(); 
    document.getElementById('msg').innerHTML = "Cadastro bem-sucedido!";
});

//funcao para mostrar os produtos cadastrados
function displayProdutos(){
    
    const listaJogos = document.getElementById('lista-jogos');
    
    produtos.forEach (function (jogo) {
        const row = listaJogos.insertRow(0);
    
        const cell1 = row.insertCell(0);
        cell1.textContext = jogo.nome;
        const cell2 = row.insertCell(1);
        cell2.textContext = jogo.desenvolvedora;
        const cell3 = row.insertCell(2);
        cell3.textContext = jogo.imagem;
        const cell4 = row.insertCell(3);
        cell4.textContext = jogo.preco
    });
}
