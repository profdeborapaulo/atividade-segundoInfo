var textos;
var velocidades;
var caixa = document.getElementById('clarear'); // Obtém o elemento 'clarear'
var caixaColisao = caixa.getBoundingClientRect(); // Obtém as dimensões e posição do elemento 'clarear'
var gravidadeAtiva = null; // Inicializa a variável para controle da gravidade

function criar() {
    var textoDigitado = document.getElementById("caixa-de-texto").value; // Obtém o texto digitado

    if (!textoDigitado == "") { // Verifica se o texto não está vazio
        var textoCriado = document.createElement("h1"); // Cria um novo elemento <h1> para o texto
        textoCriado.classList.add("texto-criado"); // Adiciona a classe 'texto-criado' ao elemento
        var classeTexto = document.querySelectorAll(".texto-criado"); // Obtém todos os elementos com a classe 'texto-criado'
        var quantidadeTexto = parseInt(classeTexto.length); // Conta o número de elementos 'texto-criado'
        textoCriado.setAttribute("id", "texto-criado" + quantidadeTexto); // Define um ID único para o novo texto
        textoCriado.setAttribute("onmousedown", "segurar(event)"); // Define a função a ser chamada ao clicar no texto
        textoCriado.textContent = textoDigitado; // Define o conteúdo do texto

        document.body.appendChild(textoCriado); // Adiciona o novo texto ao corpo do documento
        document.getElementById("caixa-de-texto").value = ''; // Limpa o campo de entrada de texto

        textos = document.querySelectorAll(".texto-criado"); // Atualiza a lista de textos

        velocidades = Array.from(textos).map(() => 0.7); // Define a velocidade inicial para cada texto

        if (gravidadeAtiva === null) { // Verifica se a gravidade não está ativa
            gravidadeAtiva = setInterval(gravidade, 10); // Inicia a gravidade se ainda não estiver ativa
        }
    }
}

var itemExiste = false;

function gravidade() {
    textos.forEach((item, index) => {
        var alturaAtual = parseFloat(window.getComputedStyle(item).top); // Obtém a altura atual do texto

        let alturaItem = item.offsetHeight; // Obtém a altura do elemento de texto
        const alturaTela = window.innerHeight; // Obtém a altura da janela do navegador

        let novaAltura = alturaAtual + velocidades[index]; // Calcula a nova altura com base na velocidade

        if (novaAltura + alturaItem <= alturaTela - 80) { // Verifica se o texto ainda está visível
            item.style.top = novaAltura + 'px'; // Atualiza a posição do texto
        } else {
            item.style.top = (alturaTela - 80 - alturaItem) + 'px'; // Ajusta a posição se o texto sair da tela
        }
        velocidades[index] += 0.5; // Aumenta a velocidade do texto
    });

    textos.forEach(function (texto) {
        var textoColisao = texto.getBoundingClientRect(); // Obtém as dimensões e posição do texto

        var colisaoY = (textoColisao.bottom > caixaColisao.top && textoColisao.top < caixaColisao.bottom); // Verifica colisão vertical
        var colisaoX = (textoColisao.right > caixaColisao.left && textoColisao.left < caixaColisao.right); // Verifica colisão horizontal

        if (colisaoX && colisaoY) { // Se houver colisão
            var conteudoDoTexto = texto.textContent; // Obtém o conteúdo do texto
            texto.style.display = "none"; // Oculta o texto
            var user = localStorage.getItem('Logado'); // Obtém o nome do usuário logado
            var dados = JSON.parse(localStorage.getItem('usuario')); // Obtém os dados do usuário do localStorage
            dados.forEach(function (dado) {
                if (dado.nome == user) { // Verifica se os dados correspondem ao usuário logado
                    var listagem = dado.lista; // Obtém a lista de itens do usuário
                    listagem.forEach(function (item) {
                        if (conteudoDoTexto == item) { // Verifica se o texto já está na lista
                            alert("Este item já está na lista, caso queira adicionar uma outra quantidade vá no caixa!"); // Alerta se o item já estiver na lista
                            itemExiste = true;
                        }
                    });
                    if (!itemExiste) { // Se o item não estiver na lista
                        dado.lista.push(conteudoDoTexto); // Adiciona o texto à lista
                        dado.numeros.push(1); // Adiciona o número 1 à lista de números
                        localStorage.setItem('usuario', JSON.stringify(dados)); // Atualiza os dados no localStorage
                    }
                }
            });
        }
    });
}

document.addEventListener("dragstart", function (event) {
    event.preventDefault(); // Previne o comportamento padrão de arrastar
});

function segurar(event) {
    var palavra = event.target; // Obtém o elemento que está sendo arrastado
    velocidades = Array.from(textos).map(() => 0.7); // Redefine a velocidade dos textos

    // Pausar a gravidade ao começar a arrastar
    if (gravidadeAtiva !== null) {
        clearInterval(gravidadeAtiva); // Para a animação de gravidade
        gravidadeAtiva = null;
    }

    function mover(event) {
        // Definir a posição do elemento baseado no mouse
        var mouseX = event.clientX - (palavra.offsetWidth / 2); // Centralizar no mouse
        var mouseY = event.clientY - (palavra.offsetHeight / 2);

        palavra.style.left = mouseX + 'px'; // Atualiza a posição horizontal
        palavra.style.top = mouseY + 'px'; // Atualiza a posição vertical
    }

    // Adicionar o ouvinte de movimento do mouse
    document.addEventListener('mousemove', mover);

    // Quando o mouse for solto, remover o ouvinte de movimento e reativar a gravidade
    document.addEventListener('mouseup', function liberar() {
        document.removeEventListener('mousemove', mover); // Para o movimento
        if (gravidadeAtiva === null) {
            gravidadeAtiva = setInterval(gravidade, 10); // Reativar a gravidade
        }
        document.removeEventListener('mouseup', liberar); // Remove o próprio ouvinte
    });
}