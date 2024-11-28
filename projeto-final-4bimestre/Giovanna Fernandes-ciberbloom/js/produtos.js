
//criando uma função para aparecer os produtos na pagina de produtos,para que o usuário veja, logo após o ADM adicionar o produto
// aqui o usuário só pode visualizar o produto e clicar no botão de reservar produto
function listarProdutos() {
    // Aqui, pegamos as informações dos produtos que foram salvos no localStorage (o local onde o navegador guarda coisas temporariamente).
    var informacoes = JSON.parse(localStorage.getItem('produto'));

    // Para cada produto salvo, a função vai repetir o que está dentro.
    informacoes.forEach(function (info) {
        // Pegamos as informações do produto, como descrição, imagem, nome e preço.
        var descricao = info.descricao;
        var imagem = info.img;
        var produto = info.produto;
        var preco = info.valor;

        // Criamos uma caixa (div) onde o produto vai aparecer na tela.
        let retangulo = document.createElement('div');
        retangulo.classList.add('retangulo'); // Damos a ela a classe "retangulo" para estilizar.

        // Contamos quantos retângulos (produtos) já existem para dar um número único a cada um.
        var retangulos = document.querySelectorAll(".retangulo");
        posicao = parseInt(retangulos.length);

        // Damos um nome único a cada retângulo para que ele possa ser identificado.
        retangulo.setAttribute('id', 'retangulo' + posicao);

        // Criamos outra caixa para colocar os detalhes do produto.
        let telaproduto = document.createElement('div');
        telaproduto.classList.add('telaproduto'); // Damos a classe "telaproduto" para organizá-lo.

        // Criamos um formulário que vai envolver o produto.
        let formulario = document.createElement('form');
        formulario.setAttribute('action', ''); // O formulário não envia nada, pois a ação está vazia.
        formulario.setAttribute('method', 'post'); // Método POST que normalmente envia dados, mas não usamos aqui.

        // Criamos o título com o nome do produto e mostramos.
        let titulo = document.createElement('h1');
        titulo.textContent = produto;

        // Criamos uma caixa para a imagem do produto.
        let imgproduto = document.createElement('div');
        imgproduto.classList.add('imgproduto'); // Damos uma classe para estilizá-la.

        // Criamos o elemento da imagem e colocamos a imagem do produto nela.
        let imagem2 = document.createElement('img');
        imagem2.setAttribute('src', imagem); // Definimos a origem da imagem.
        imagem2.setAttribute('alt', 'imgproduto'); // Definimos um texto alternativo caso a imagem não carregue.

        // Criamos uma linha para separar as informações.
        let linha = document.createElement('span');
        linha.classList.add('linha'); // Adiciona uma linha entre os elementos.

        // Criamos um campo para o preço do produto e mostramos ele.
        let valor = document.createElement('h3');
        valor.textContent = "R$" + preco; // Mostra o preço do produto.

        // Criamos um espaço para colocar as informações do produto, como a descrição.
        let informacao = document.createElement('div');
        informacao.classList.add('informacao'); // Adicionamos uma classe "informacao" para organizar.

        // Criamos um parágrafo com a descrição do produto e mostramos.
        let descrever = document.createElement('p');
        descrever.textContent = descricao;

        // Criamos um espaço para os botões.
        let botoes = document.createElement('div');
        botoes.classList.add('botoes'); // Adicionamos uma classe para estilizar os botões.

        // Criamos o botão "Reservar" para o usuário clicar.
        let botao1 = document.createElement('button');
        botao1.textContent = "Reservar"; // O texto do botão é "Reservar".

        // Adicionamos a imagem à caixa de imagens.
        imgproduto.appendChild(imagem2);

        // Adicionamos a descrição ao espaço de informações.
        informacao.appendChild(descrever);

        // Adicionamos o botão ao espaço de botões.
        botoes.appendChild(botao1);

        // Agora colocamos todos esses elementos (título, imagem, linha, preço, descrição, botão) no formulário.
        formulario.appendChild(titulo);
        formulario.appendChild(imgproduto);
        formulario.appendChild(linha);
        formulario.appendChild(valor);
        formulario.appendChild(linha);
        formulario.appendChild(informacao);
        formulario.appendChild(botoes);

        // O formulário todo vai para a telaproduto.
        telaproduto.appendChild(formulario);

        // A telaproduto vai dentro do retângulo.
        retangulo.appendChild(telaproduto);

        // Finalmente, colocamos o retângulo com o produto na página, antes de um outro elemento que já existe com id 'gi'.
        var antes = document.getElementById('gi');
        antes.parentNode.insertBefore(retangulo, antes);
    });
}
