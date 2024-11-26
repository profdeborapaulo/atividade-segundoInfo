
//criando uma função para aparecer os produtos na pagina do adm, logo após ele add o produto
// aqui o adm vai poder remover o produto ou editalo.
function listarProdutos() {

    //aqui vou pegar as informações que estão armazenadas no localStorage
    var informacoes = JSON.parse(localStorage.getItem('produto'));

    // a cada produto que for adicionado, vou precisar deixar uma odem do que deve aparecer primeiro, como se fosse o html mas por aqui
    informacoes.forEach(function (info) {

        // pegando as informações de cada produto, que foram armazenadas em cadastrar
        var descricao = info.descricao;
        var imagem = info.img;
        var produto = info.produto;
        var preco = info.valor;

        // eu queria que tivesse um retangulo branco para as informações ficarem na frente, por isso crio um "retângulo", vai ser a caixinha onde o produto vai aparecer
        let retangulo = document.createElement('div');
        retangulo.classList.add('retangulo'); // classe para estilizar no css

        // precisa saber quandos retangulos"que estão armazenando as informações" já existem.
        var retangulos = document.querySelectorAll(".retangulo");
        posicao = parseInt(retangulos.length); // aqui vai ser definida uma posição para o novo retangulo

        // um ID único o novo retangulo
        retangulo.setAttribute('id', 'retangulo' + posicao);

        // aqui é uma área do produto dentro do retangulo
        let telaproduto = document.createElement('div');
        telaproduto.classList.add('telaproduto');// classe para estilizar no css a tela do produto


        // criando um formulário, esse não envia dados, só serve para organizar as informações
        let formulario = document.createElement('form');
        formulario.setAttribute('action', '');// o formulário não vai ter nenhuma ação
        formulario.setAttribute('method', 'post');// o método post, mesmo não enviando nenhuma informação

        // o titulo do produto é criado
        let titulo = document.createElement('h1');
        titulo.textContent = produto // aqui coloca o nome do produto, a partir do addproduto

        // aqui vai ficar área da img do produto
        let imgproduto = document.createElement('div');
        imgproduto.classList.add('imgproduto'); // o css para estilisar a  area que a img está

        // aqui fica a img do produto
        let imagem2 = document.createElement('img');
        imagem2.setAttribute('src', imagem);// a img está sendo incerida
        imagem2.setAttribute('alt', 'imgproduto');

        // Criei uma linha decorativa
        let linha = document.createElement('span');
        linha.classList.add('linha'); // Classe CSS para estilo da linha

        //aqui vou colocar o preço do produto
        let valor = document.createElement('h3');
        valor.textContent = "R$" + preco; // aqui serve para exibir o preço com "R$" na frente

        //aqui fica o espaço onde vai ficar a descrição do produto
        let informacao = document.createElement('div');
        informacao.classList.add('informacao'); // aqui fica o nome que posso chamar para modificar no css

        //aqui está a descrição do produto
        let descrever = document.createElement('p');
        descrever.textContent = descricao;// O texto com a descrição do produto

        // aqui fica a área dos botões (Editar e Remover)
        let botoes = document.createElement('div');
        botoes.classList.add('botoes');// Classe CSS para estilo

        //  aqui está o botão de "Editar"
        let botao1 = document.createElement('button');
        botao1.textContent = "Editar";// Botão de editar o produto (não está funcional)

        //  aqui está o botão de "Remover"
        let botao2 = document.createElement('button');
        botao2.textContent = "Remover"; // Botão de remover o produto
        // Aqui, o botão chama a função "limpar" para remover o produto quando clicado
        botao2.setAttribute('onclick', "limpar(" + "'retangulo" + posicao + "')");

        // Agora, vamos organizando tudo que foi criado
        imgproduto.appendChild(imagem2);  // Colocamos a imagem na área da imagem


        informacao.appendChild(descrever);  // Colocamos a descrição dentro da área de informações

        botoes.appendChild(botao1); // Adicionamos o botão de editar na área dos botões
        botoes.appendChild(botao2); // Adicionamos o botão de remover na área dos botões

        // Adicionamos todos os elementos ao formulário (nome, imagem, preço, descrição, botões)
        formulario.appendChild(titulo);
        formulario.appendChild(imgproduto);
        formulario.appendChild(linha);
        formulario.appendChild(valor);
        formulario.appendChild(linha);
        formulario.appendChild(informacao);
        formulario.appendChild(botoes);

        // Colocamos o formulário dentro da área do produto (telaproduto)
        telaproduto.appendChild(formulario);

        // Colocamos a área do produto (telaproduto) dentro da caixinha (retângulo)
        retangulo.appendChild(telaproduto);

        // Agora, inserimos essa caixinha antes de um elemento específico na página (o ID 'gi')
        var antes = document.getElementById('gi');
        antes.parentNode.insertBefore(retangulo, antes);
    });
}

// Função para remover o produto da lista
function limpar(produto) {
    // Aqui pegamos o retângulo (caixinha) que queremos remover pelo ID
    var retangulo = document.getElementById(produto);
    var titulo = retangulo.querySelector('h1').textContent; // Pegamos o nome do produto dentro da caixinha

    // Pegamos todos os produtos armazenados no navegador (localStorage)
    var produtos = JSON.parse(localStorage.getItem('produto'));

    // Vamos passar por cada produto salvo para ver qual deve ser removido
    produtos.forEach(function (produto, posicao) {
        if (produto.produto == titulo) {// Se o nome do produto bater, removemos ele
            produtos.splice(posicao, 1); // Remove o produto da lista de produtos
            localStorage.setItem('produto', JSON.stringify(produtos)) // Atualiza a lista no navegador
        }
    });
}

/*

explicações ajudadas: 
Cria as tags
- var tagNova document.createElement("Nome da Tag");

Adcione um texto dentro da tag
- tagNova.textContent = "Texto legal";

Adcione uma classe ao elemento
- tagNova.classList.add("Nome da classe");

Adcionar um atributo ao elemento (id, value, name)
- tagNova.setAttribute("nome do atributo", "valor do atributo")

Adciona o elemento na página
- document.body.appendChild(tagNova);

Inserir antes de algum elemento já existente
Primeiro deve se pegar o email do item que já existe na página
- var itemAnterior = document.getElementById("elementoAnterior");
Depois basta colocar antes
- document.body.insertBefore(tagNova, itemAnterior);

Remover um elemento
Pegue o id do elemento
- var elementoParaRemover = document.getElementById("Remover");
- elementoParaRemover.remove();


ideia de como eu queria que aparecesse os produtos nessa pagina e na pagina de produtos para o usuário
<div class="retangulo">
            <div class="telaproduto">
                <form action="" method="post">
                    <h1>Sorvete raspas de coco</h1>
                    <div class="imgproduto">
                        <img src="img/sorvete1.jpeg" alt="imgproduto">
                    </div>
                    <span class="linha"></span>
                    <h3>R$5,00</h3>
                    <span class="linha"></span>
                    <div class="informacao">


                        <p>Esse sorvete tropical super refrescante, é unico em nossa sorveteria, reserve o seu já!! para
                            saborear das maravilhas de estar na gelataria fragolina e saborear este sorvete</p>

                    </div>
                    <div class="botoes">
                        <button>Reservar</button>
                    </div>
                </form>

            </div>
        </div>

*/