document.addEventListener('DOMContentLoaded', function () {


    //transição suave entre paginas
    window.addEventListener('load', () => {
        document.body.classList.add('visivel');
    });

    //efeito de scroll da pagina inicio.html

    let scrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > scrollTop) {
            efectScroll();
        }
        scrollTop = scrollPosition;

    });

    function efectScroll() {

        let containers = document.getElementsByClassName('oculto-2');

        for (let i = 0; i < containers.length; i++) {
            setTimeout(() => {
                containers[i].classList.add('visivel-2');
            }, 300);
        }
    }

    //Página de Cadastro


    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    //gera um id para elementos salvos no local storage
    function geradorID() {
        return Date.now(); 
    }

    // Verificar se o usuário já está logado e acessa cadastro ou login
    if (
        usuarioLogado &&
        (window.location.pathname.includes('cadastro.html') || window.location.pathname.includes('login.html'))
    ) {
        alert('Saia de sua conta primeiro!');

        window.location.href = "inicio.html";

        return; // Impedir que o restante do código seja executado
    }

    // Cadastro de usuário

    //verifica se usuario esta logado e se está na pagina de cadastro
    if (!usuarioLogado && window.location.pathname.includes('cadastro.html')) {
        const cadastroForm = document.getElementById('cadastro-form');

        
        //adciona um evento de submit ao formulario cadastro 
        if (cadastroForm) {
            cadastroForm.addEventListener('submit', function (e) {
                e.preventDefault();
                cadastrarUsuario();
            });
        }

        //função de cadastro de novo usuario
        function cadastrarUsuario() {
            const nome = document.getElementById('nome').value.trim();
            const senha = document.getElementById('senha').value.trim();

            // Validar campos
            if (!nome || !senha) {
                alert('Preencha todos os campos!');
                return;
            }

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            // Verificar se o nome já está em uso
            if (usuarios.find(usuario => usuario.nome === nome)) {
                alert('Usuário já cadastrado!');
                return;
            }

            //coloca o usuario num array 
            const novoUsuario = {
                id: Date.now(),
                nome: nome,
                senha: senha
            };

            //coloca a variavel no local storage
            usuarios.push(novoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            //emite o alert de conclusão
            alert('Usuário cadastrado com sucesso!');
            cadastroForm.reset();
            window.location.href = "login.html";
        }
    }

    // Login de usuário

    if (!usuarioLogado && window.location.pathname.includes('login.html')) {
        const loginForm = document.getElementById('login-form');

        //adciona um evento de submit ao formulario login 
        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                realizarLogin();
            });
        }

        //função de login
        function realizarLogin() {
            const nomeLogin = document.getElementById('nome-login').value.trim();
            const senhaLogin = document.getElementById('senha-login').value.trim();

        
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const usuarioEncontrado = usuarios.find(usuario => usuario.nome === nomeLogin);

            //verifica se usuario está cadastrado
            if (usuarioEncontrado && usuarioEncontrado.senha === senhaLogin) {
                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));

                //alert oficializando o login
                alert('Login realizado com sucesso!');
                loginForm.reset();
                setTimeout(() => {
                    window.location.href = "inicio.html";
                }, 100);
             //usuario ou senha nao encotrados   
            } else if (usuarioEncontrado) {
                alert('Senha incorreta!');
            } else {
                alert('Usuário não encontrado!');
            }
        }
    }



    //logout função
    let verifyLogout = document.getElementById('logout-link');

    //adiciona o evento ao clicar no botao "sair"
    if (verifyLogout) {
        verifyLogout.addEventListener('click', function (e) {
            e.preventDefault();
            logout();
        });
    }

    //desloga usuario
    function logout() {
        localStorage.removeItem('usuarioLogado');
        alert('Você foi deslogado!');
        window.location.href = "login.html";
    }

    //Adicionar noticias

    if (window.location.pathname.includes('adicionar.html')) {
        // Obter o usuário logado do localStorage
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

        //PopUp

        const popup = document.getElementById("popup");
        const openPopup = document.getElementById("open-popup");
        const closePopup = document.getElementById("close-popup");

        // Abre o pop-up
        openPopup.addEventListener("click", () => {
            popup.style.display = "flex";
        });

        // Fecha o pop-up
        closePopup.addEventListener("click", () => {
            popup.style.display = "none";
        });

        // Fecha o pop-up ao clicar fora do conteúdo
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });

        // Verificar se o usuário está logado
        if (usuarioLogado) {
            // Verificar se o nome do usuário logado é 'abel'
            if (usuarioLogado.nome === 'adm' && usuarioLogado.senha === '123') {
                // Adicionar evento de submit no formulário de adicionar notícia
                const addForm = document.getElementById('add-form');
                addForm.addEventListener('submit', function (e) {
                    e.preventDefault(); // Prevenir o envio do formulário
                    addMateria(); // Chamar a função para adicionar a matéria
                });

                // Função para adicionar a matéria
                function addMateria() {
                    // Pegando os valores dos campos do formulário
                    const tituloNoticia = document.getElementById('titulo-noticia').value;
                    const explicacao = document.getElementById('explicacao').value;
                    const subtitulo1 = document.getElementById('subtitulo-1').value;
                    const subtitulo2 = document.getElementById('subtitulo-2').value;
                    const subtitulo3 = document.getElementById('subtitulo-3').value;
                    const texto1 = document.getElementById('texto-1').value;
                    const texto2 = document.getElementById('texto-2').value;
                    const texto3 = document.getElementById('texto-3').value;
                    const imagemNoticia = document.getElementById('imagem-noticia').files[0]; 
                    const linkNoticia = document.getElementById('link-noticia').value;

                    // Verificar se a imagem foi selecionada
                    if (imagemNoticia) {
                        // Converter a imagem para Base64
                        convertImageToBase64(imagemNoticia, function (base64Image) {
                            // Obter as notícias atuais do localStorage ou criar um array vazio
                            let noticias = JSON.parse(localStorage.getItem('noticias')) || [];

                            // Criar a nova notícia
                            const novaNoticia = {
                                id_noticia: geradorID(), 
                                id_user: usuarioLogado.id, 
                                titulo: tituloNoticia,
                                explicacao: explicacao,
                                subtitulo1: subtitulo1,
                                subtitulo2: subtitulo2,
                                subtitulo3: subtitulo3,
                                texto1: texto1,
                                texto2: texto2,
                                texto3: texto3,
                                imagemNoticia: base64Image, 
                                linkNoticia: linkNoticia
                            };

                            
                            noticias.push(novaNoticia);

                            // Salvar a lista de notícias de volta no localStorage
                            localStorage.setItem('noticias', JSON.stringify(noticias));

                            // Limpar os campos do formulário após o envio
                            addForm.reset();

                            // Redirecionar para a página inicial após a adição da notícia
                            window.location.href = "inicio.html";
                        });
                    } else {
                        alert('Por favor, selecione uma imagem para a notícia!');
                        window.location.href = "inicio.html";
                    }
                }

                // Função para converter a imagem para Base64
                function convertImageToBase64(file, callback) {
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        callback(event.target.result); // A string Base64 da imagem
                    };
                    reader.readAsDataURL(file); // Ler o arquivo como Base64
                }
            } else {
                // Se o usuário logado não for 'abel'
                alert('Você não possui autorização para adicionar notícias!');
            }
        } else {
            // Caso o usuário não esteja logado
            alert('Você precisa estar logado para adicionar notícias!');
            window.location.href = "login.html"; 
        }
    }

    //Carregando noticias na página principal

    if (window.location.pathname.includes('inicio.html')) {

        //pegando variaveis
        const noticias = JSON.parse(localStorage.getItem('noticias')) || [];

        const container = document.getElementById('noticias-container');

        //foreach que carrega as noticias do localstorage
        noticias.forEach((noticia) => {

            //linha de divisao entre noticias
            const linhaDiv = document.createElement('div');
            linhaDiv.className = 'linha-divisoria';
            container.appendChild(linhaDiv);

            //imagem de fundo 
            const noticiaDiv = document.createElement('div');
            noticiaDiv.className = 'oculto-2';
            noticiaDiv.id = "container2";
            noticiaDiv.style.backgroundImage = `url(${noticia.imagemNoticia})`;

            //titulo da noticia
            const titleDiv = document.createElement('div');
            titleDiv.id = "title-2";
            const title = document.createElement('h1');
            title.textContent = noticia.titulo;
            titleDiv.appendChild(title);

            //apresentação da noticia
            const textoApresentacaoDiv = document.createElement('div');
            textoApresentacaoDiv.id = "texto-apresentacao2";
            const texto = document.createElement('p');
            texto.textContent = noticia.explicacao;

            //botao com redirecionamento para a pagina noticia
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';

            //link com o id da noticia
            const verMaisLink = document.createElement('a');
            verMaisLink.href = `noticia.html?id=${noticia.id_noticia}`;
            const verMaisButton = document.createElement('button');
            verMaisButton.className = 'botao';
            verMaisButton.innerHTML = '<span>Veja Mais</span>';
            verMaisLink.appendChild(verMaisButton);

            textoApresentacaoDiv.appendChild(buttonContainer);

            textoApresentacaoDiv.appendChild(texto);
            textoApresentacaoDiv.appendChild(verMaisLink);

            noticiaDiv.appendChild(titleDiv);
            noticiaDiv.appendChild(textoApresentacaoDiv);

            container.appendChild(noticiaDiv);
        });
    }

    //Inicio da página de noticia

    if (window.location.pathname.includes('noticia.html')) {

        window.addEventListener('load', () => {
            processarPagina();
        });

        //processo da pagina com noticia selecionada
        function processarPagina() {

            //coleta de dados
            const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
            const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);
            const id = params.get('id');

            const noticiaAtual = noticias.find(noticia => noticia.id_noticia == id);

            //chama a função se usuario estiver logado
            if (usuarioLogado) {
                gerenciarBotoes(usuarioLogado, noticiaAtual);
            }
            atualizarPaginaComNoticia(noticiaAtual);
        }


        // Função para atualizar o conteúdo da página com base na notícia
        function atualizarPaginaComNoticia(noticiaAtual) {

            //atualiza cada elemento id do html, de acordo com o elemento da variavel "noticiaAtual"
            const video = document.getElementById('video');
            video.src = `https://www.youtube.com/embed/${noticiaAtual.linkNoticia}`;

            const title1 = document.getElementById("title");
            title1.textContent = noticiaAtual.subtitulo1;

            const title2 = document.getElementById("title2");
            title2.textContent = noticiaAtual.subtitulo2;

            const title3 = document.getElementById("title3");
            title3.textContent = noticiaAtual.subtitulo3;

            const texto = document.getElementById("texto");
            texto.textContent = noticiaAtual.texto1;

            const texto2 = document.getElementById("texto2");
            texto2.textContent = noticiaAtual.texto2;

            const texto3 = document.getElementById("texto3");
            texto3.textContent = noticiaAtual.texto3;
        }

        // Função para gerenciar botões visíveis com base no usuário logado
        function gerenciarBotoes(usuarioLogado, noticiaAtual) {
            if (usuarioLogado.id === noticiaAtual.id_user) {

                const botao2 = document.getElementById("button2");

                botao2.className = "visivel2";

            }
        }

        const botao2 = document.getElementById("button2");

        //evento de click para exclusao de noticia
        botao2.addEventListener('click', function () {
            excluir(); // Chama a função para excluir a notícia
        });

        //Função de excluir noticia

        function excluir() {

            //coleta variaveis
            let url = new URL(window.location.href);
            let params = new URLSearchParams(url.search);
            let id = params.get('id');

            
            //caso id nao seja encontrado
            if (!id) {
                alert('ID da notícia não encontrado!');
                return;
            }

            //pega noticias do local storage
            let noticias = JSON.parse(localStorage.getItem('noticias')) || [];


            let indice = noticias.findIndex(noticia => noticia.id_noticia == id);

            //caso indice nao seja encontrado
            if (indice === -1) {
                alert('Notícia não encontrada!');
                return;
            }

            //exclusão por splice
            noticias.splice(indice, 1);

            //atualiza o local storage
            localStorage.setItem('noticias', JSON.stringify(noticias));

            //alert emitindo sucesso da exclusão
            alert('Notícia excluída com sucesso!');
            window.location.href = "inicio.html";
        }
    }
});