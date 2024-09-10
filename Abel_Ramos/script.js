document.addEventListener('DOMContentLoaded', function () {//executa o codigo após o carregamento do HTML, previne de erros que estavam ocorrendo

    //mudança suave de página
    window.addEventListener('load', () => {//quando o evento for load...
        document.body.classList.add('loaded');//... ele adiciona a class loaded para uma transição suave
    });

    //Botao da navbar

    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) { // Verifica se o botão existe no DOM
        menuBtn.addEventListener('click', function() { 
            const navLinks = document.getElementById('nav-links'); // pega o elemento nav links e guarda na variavel
            if (navLinks) { // Verifica se o navLinks existe
                navLinks.classList.toggle('active'); // muda a classe para active
            }
        });
    }

    //Inicio da pagina de cadastro

    // Capturar os dados do formulário de cadastro
    const formAtividade = document.getElementById('atividade-form');

    function geradorID() {
        return Date.now(); // gera um ID baseado no timestamp atual
    }

    // Função para adicionar atividade
    function addAtividade() {
        let nomeAtividade = document.getElementById('nome-atividade').value;//capturando os dados via getElement
        let dataAtividade = document.getElementById('data-atividade').value;//capturando os dados via getElement
        let descricaoAtividade = document.getElementById('descricao').value;//capturando os dados via getElement

        // Recupera atividades existentes ou cria um array vazio 
        let atividades = JSON.parse(localStorage.getItem('atividades')) || [];//pega o json ou cria um array vazio

        // armazena tudo em um array

        let atividade = {
            id: geradorID(),
            nome: nomeAtividade,
            data: dataAtividade,
            descricao: descricaoAtividade
        };

        atividades.push(atividade); // Adiciona a atividade ao array que ficará no local storage
        localStorage.setItem('atividades', JSON.stringify(atividades)); // Salva no localStorage

        // Limpar os campos de entrada
        document.getElementById('nome-atividade').value = '';
        document.getElementById('data-atividade').value = '';

        // Redirecionamento suave para a página de exibição

        window.location.href = "index.html";
    }

    // Evento para submeter os dados do formulário
    if (formAtividade) {//verifica se formulario de cadastro existe na pagina
        formAtividade.addEventListener('submit', function (e) {//aciona um evento quando o formulário for enviado
            e.preventDefault();//previne o comportamento padrao para melhor controle
            geradorID(); //aciona a função de gerar id
            addAtividade(); //aciona a fução de adicionar atividade
        });
    }

    //Fim da página de cadastro

    //Inicio do Index

    const pesquisa = document.getElementById('pesquisar');//pega o elemento comid pesquisar

    // Verifica se o input existe
    if (pesquisa) {
        //evento baseado no clique na tecla enter
        pesquisa.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                pesquisar();
            }
        });
    }

    //Função pesquisar

    function removerAcentos(texto) {//funçao para remover o acento da pesquisa
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");//decompoe o texto em "letra"+"acento", e substitui o acento por uma string vazia, removendo-os.
    }

    function pesquisar() {
        let title = document.getElementById('pesquisar').value; // pega o valor do campo de busca
        let atividades = JSON.parse(localStorage.getItem('atividades')); // pega a lista do localStorage
        const listaAtividades = document.getElementById('lista-atividade'); // pega a tabela onde será exibida a atividade
        listaAtividades.innerHTML = ''; // limpa a tabela

        // Normaliza e compara sem acentos e com letras minúsculas
        let titleNormalizado = removerAcentos(title.toLowerCase());

        //Procura por um indice so array, com as configurações de normalização, que tenha o nome igual ao tituloNormalizado
        let atvEncontrada = atividades.find(atividade =>
            removerAcentos(atividade.nome.toLowerCase()) === titleNormalizado
        );

        if (atvEncontrada) {
            // Exibe a atividade encontrada, comentarios sobre cada linha na proxima função
            let row = listaAtividades.insertRow();
            let cell1 = row.insertCell(0);
            cell1.textContent = atvEncontrada.nome;

            row.className = "visivel";

            let cell2 = row.insertCell(1);
            cell2.textContent = atvEncontrada.data;

            let cell3 = row.insertCell(2);
            let editLink = document.createElement('a');
            let id = atvEncontrada.id;
            editLink.href = `editar.html?id=${id}`;

            let img1 = document.createElement('img');
            img1.src = "imagens/edit.png";
            img1.alt = "Editar";
            img1.title = "Editar";
            img1.className = "all_link";
            img1.style.width = "64px";
            img1.style.height = "64px";

            editLink.appendChild(img1);
            cell3.appendChild(editLink);

            let cell4 = row.insertCell(3);
            let deleteLink = document.createElement('a');

            let img2 = document.createElement('img');
            img2.src = "imagens/exclui.png";
            img2.alt = "Apagar";
            img2.title = "Apagar";
            img2.className = "all_link";
            img2.style.width = "64px";
            img2.style.height = "64px";

            deleteLink.appendChild(img2);
            deleteLink.onclick = function () {

                row.classList.toggle('oculto');

                setTimeout(function () {
                    let indice = atividades.findIndex(atividade => atividade.id == id);
                    atividades.splice(indice, 1);
                    localStorage.setItem('atividades', JSON.stringify(atividades));
                    displayAtividades();
                }, 600);
            };
            cell4.appendChild(deleteLink);

        } else {
            alert('Atividade não encontrada!!');

            displayAtividades();
        }

    }



    // Função para exibir as atividades na tabela
    function displayAtividades() {
        const listaAtividades = document.getElementById('lista-atividade'); // Pega o elemento id e coloca na variável
        listaAtividades.innerHTML = ''; // Limpa o conteúdo atual da tabela

        let atividades = JSON.parse(localStorage.getItem('atividades')); // Pega a lista de atividades armazenadas no localStorage e transforma em objeto

        atividades.forEach(function (atividade) { // Itera sobre cada atividade usando forEach

            let row = listaAtividades.insertRow(); // Insere uma nova linha na tabela

            row.className = "visivel";//adicona a classe para uma transição futura

            let cell1 = row.insertCell(0); // Cria a primeira célula da linha
            cell1.textContent = atividade.nome; // Coloca o nome da atividade na célula 1

            let cell2 = row.insertCell(1); // Cria a segunda célula da linha
            cell2.textContent = atividade.data; // Coloca a data da atividade na célula 2

            let cell3 = row.insertCell(2); // Cria a terceira célula da linha
            let editLink = document.createElement('a'); // Cria um elemento de link para edição
            let id = atividade.id; // Obtém o ID da atividade
            editLink.href = `editar.html?id=${id}`; // Coloca o link para a página de edição com o ID da atividade

            let img1 = document.createElement('img'); // Cria um elemento de imagem para o ícone de edição
            img1.src = "imagens/edit.png"; // Coloca a fonte da imagem de edição
            img1.alt = "Editar"; // Coloca o texto da imagem
            img1.title = "Editar"; // Coloca o título da imagem 
            img1.className = "all_link"; // Coloca a classe CSS da imagem
            img1.style.width = "64px"; // Coloca a largura da imagem
            img1.style.height = "64px"; // Coloca a altura da imagem

            editLink.appendChild(img1); // Adiciona a imagem ao link de edição

            cell3.appendChild(editLink); // Adiciona o link de edição à célula 3

            let cell4 = row.insertCell(3); // Cria a quarta célula da linha
            let deleteLink = document.createElement('a'); // Cria um elemento de link para exclusão

            let img2 = document.createElement('img'); // Cria um elemento de imagem para o ícone de exclusão
            img2.src = "imagens/exclui.png"; // Coloca a fonte da imagem de exclusão
            img2.alt = "Apagar"; // Coloca o texto da imagem
            img2.title = "Apagar"; // Coloca o título da imagem 
            img2.className = "all_link"; // Coloca a classe CSS da imagem
            img2.style.width = "64px"; // Coloca a largura da imagem
            img2.style.height = "64px"; // Coloca a altura da imagem

            deleteLink.appendChild(img2); // Adiciona a imagem ao link de exclusão
            deleteLink.onclick = function () { // Define a função a ser executada quando o link de exclusão for clicado

                let indice = atividades.findIndex(atividade => atividade.id == id); // Encontra o índice da atividade pelo ID

                row.classList.toggle('oculto');//troca a classe da linha para uma suave transição

                setTimeout(function () {
                    atividades.splice(indice, 1); // Remove a atividade da lista pelo índice

                    localStorage.setItem('atividades', JSON.stringify(atividades)); // Atualiza o localStorage com a lista modificada

                    displayAtividades(); // Recarrega a lista de atividades na tabela
                }, 600);
            };

            cell4.appendChild(deleteLink); // Adiciona o link de exclusão à célula 4
        });
    };

    // Carregar as atividades quando a página de exibição for carregada
    if (document.getElementById('lista-atividade')) {
        displayAtividades();
    }

    //Fim pagina Index

    //Inicio pagina de edição

    const A_form = document.getElementById('atividade_form');//Pega o elemento id e armazena na variável

    //verifica o formulario está presente na pagina
    if (A_form) {

        let url = new URL(window.location.href); // Cria um objeto URL a partir da URL atual da página

        let params = new URLSearchParams(url.search); // Cria um objeto para trabalhar com os parâmetros da URL (query string)

        let id = params.get('id') || ""; // Obtém o valor de id da URL ou retorna uma string vazia se o parâmetro não existir

        //Se id existir
        if (id) {

            let atividades = JSON.parse(localStorage.getItem('atividades'));//pega o arquivo json e coloca numa variavel

            let atividadeAtual = atividades.find(atividade => atividade.id == id);//procura qual atividade tem o id capturado

            if (atividadeAtual) {//verifica se atividade atual existe

                document.getElementById('nome-atividade').value = atividadeAtual.nome;//coloca o elemento nome no input para edição
                document.getElementById('data-atividade').value = atividadeAtual.data;//coloca o elemento data no input para edição
                document.getElementById('descricao').value = atividadeAtual.descricao;//coloca o elemento descricao no input para edição

                // Função para editar a atividade
                function editar() {
                    let New_Name = document.getElementById('nome-atividade').value;//pega o valor modificado do input nome atividade
                    let New_Date = document.getElementById('data-atividade').value;//pega o valor modificado do input data atividade
                    let New_Description = document.getElementById('descricao').value//pega o valor modificado do input descricao atividade

                    // Atualiza os valores da atividade existente
                    atividadeAtual.nome = New_Name;
                    atividadeAtual.data = New_Date;
                    atividadeAtual.descricao = New_Description;

                    // Procura o indice dentro do array pai que corresponda a condição. Substitui a atividade no array e salva no localStorage
                    let indice = atividades.findIndex(atividade => atividade.id == id);
                    atividades[indice] = atividadeAtual;
                    localStorage.setItem('atividades', JSON.stringify(atividades));

                    // Redireciona para a página de exibição
                    window.location.href = "index.html";
                }

                // Evento para submeter os dados do formulário
                A_form.addEventListener('submit', function (e) {
                    e.preventDefault();//previne o comportamento padrao para melhor controle
                    editar(); // Chama a função para editar e redirecionar
                });

            }
            //se nao existir por algum erro, aparecerá a mensagem   
        } else {
            alert('ERRO! Atividade não encontrada para o ID: ' + id);
            window.location.href = "index.html";
        }
    }
    //fim pagina edição
});