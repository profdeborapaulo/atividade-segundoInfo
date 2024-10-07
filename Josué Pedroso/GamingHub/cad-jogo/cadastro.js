// Array para armazenar os produtos
const produtos = [];
 
// Criar uma função para adicionar os produtos
function addProduto() {      
    let nomeJogo = document.getElementById('nome-produto').value;
    let desenvolvedora = document.getElementById('des-produto').value;
    let imagem = document.getElementById('link-imagem').value;
    let descricao = document.getElementById('descricao').value;
    let precoJogo = document.getElementById('preco-produto').value;
 
    // Verificar se os campos estão preenchidos
    if (nomeJogo && desenvolvedora && imagem && precoJogo) {
        let produto = {
            nome: nomeJogo,
            desenvolvedora: desenvolvedora,
            imagem: imagem,
            descricaoJogo: descricao,
            preco: precoJogo
        };
        // Adicionar o produto dentro do array usando o método push()
        produtos.push(produto);
        displayProdutos(); // Função para mostrar os produtos cadastrados
        // Limpar os campos de entrada
        document.getElementById('nome-produto').value = '';
        document.getElementById('des-produto').value = '';
        document.getElementById('link-imagem').value = '';
        document.getElementById('preco-produto').value = '';
        document.getElementById('descricao').value = '';
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
    
    produtos.forEach (listaJogos =>{
        document.getElementById('produtos').innerHTML ='';

        document.getElementById('produtos').innerHTML=`
            <div class="card" style="width: 18rem; background-color: #ccc; border: solid 2px #616161;">
          <img src="${produtos.imagem}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 id="card-title">${produtos.nomeJogo}</h5>
            <p class="card-text">${produtos.descricaoJogo}</p>
            <p class="card-text">${produtos.preco}</p> <br>
            <button onclick="addCarrinho('${produtos.nomeJogo}', ${produtos.preco}, ${produtos.imagem})">Comprar</button>
          </div>
        </div>
        `;
    });
}
