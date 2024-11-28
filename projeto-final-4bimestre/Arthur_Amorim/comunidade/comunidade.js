// Função para adicionar comentários armazenados no localStorage à página
function addComentario() {
    let i; // Variável comum para o for
    let chave; // nome  chave do localstorage
    let valor; // valores da chave
    let valorChave; // numero sem letras da chave para identificar o comentário
    let chaveComentario; // texto da chave sem o numero para verificar se é um comentário

    // Itera por todas as chaves armazenadas no localStorage
    for (i = 0; i < localStorage.length; i++) {
        let main = document.querySelector(".conjuntoTodo"); // Elemento principal onde os comentários serão adicionados
        chave = localStorage.key(i); // Obtém a chave atual

        // Remove números do final da chave para verificar se tem o nome comentario
        chaveComentario = chave.replace(/\d+$/, "");
        if (chaveComentario == "comentario") { // Verifica se a chave tem como nome omentário
            valor = JSON.parse(localStorage.getItem(chave)); // Obtém o valor da chave e converte para objeto
            valorChave = parseInt(chave.replace(/\D/g, "")); // tira as letras do nome da chave

            // Dados do comentário
            let nome = valor.nome;
            let descricao = valor.descricao;
            let tags = valor.tags;
            let upvotes = valor.upvotes;
            let downvotes = valor.downvotes;

            // Cria o elemento principal que compõem cada página do comentário
            let wrapper = document.createElement("div");
            wrapper.setAttribute("class", "wrapper");
            wrapper.setAttribute("id", "wrapper" + valorChave);

            // Insere o conteúdo HTML do comentário dentro do elemento principal (wrapper)
            wrapper.innerHTML = `
                <div class="before-wrapper" id="before-wrapper${valorChave}"></div>
                <div class="display">
                    <div class="textos">
                        <div class="nome">
                            <h2>${nome}</h2>
                        </div>
                        <div class="comentario">
                            <h2>${descricao}</h2>
                        </div>
                        <div class="funcional">
                            <div class="tags">
                                <h2>${tags}</h2>
                            </div>
                            <div class="votes">
                                <div class="arrow-up">
                                    <input type="button" value="🢧" onclick="darLike(${valorChave})">
                                    <h2 class="likes" id="upVote${valorChave}">${upvotes}</h2>
                                </div>
                                <div class="arrow-down">
                                    <input type="button" value="🢧" onclick="darDesLike(${valorChave})">
                                    <h2 class="desliikes" id="downVote${valorChave}">${downvotes}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span></span>
                <span></span>
            `;

            main.appendChild(wrapper); // Adiciona o wrapper ao corpo do html pela div de classe="conjuntoTodo"

            // Verifica se existe registro de votos para este comentário
            if (localStorage.getItem("votos") !== null) {
                var votos = JSON.parse(localStorage.getItem("votos")); // Recebe do localstorage os votos e converte em objeto
                if (votos["comentario" + valorChave] !== null) { // Verifica se o voto que possui como objeto o nome comentario e numero equivalente ao comentário atual clicado não é nulo/existe no banco de dados
                    let voto = parseInt(votos["comentario" + valorChave]); // Pega e converte o valor/tipo de voto para inteiro
                    if (voto == 1) { // Se o comentário já recebeu um like
                        let before = document.getElementById("before-wrapper" + valorChave);
                        before.classList.add("display");
                        before.style.display = "block"; // Exibe o estado do like visualmente
                    }
                }
            }
        }
    }
}

// Função para dar um like em um comentário
function darLike(id) {
    if (localStorage.getItem("votos") !== null) { // Verifica se há votos registrados
        var votos = JSON.parse(localStorage.getItem("votos")); // Transforma os valores de voto para objeto

        if (votos["comentario" + id] == null) { // Inicia o voto caso ainda não exista
            votos["comentario" + id] = 0; // Inicia o voto como 0 que é equivalente a nenhum
            localStorage.setItem("votos", JSON.stringify(votos));
        }

        let voto = parseInt(votos["comentario" + id]); // Pega e converte o valor/tipo de voto para inteiro

        if (voto == 0) { // Se o comentário ainda não recebeu voto
            let seta = document.getElementById("upVote" + id);
            let valorDeLikes = parseInt(seta.textContent);
            valorDeLikes++;
            seta.textContent = valorDeLikes; // Incrementa o contador de likes

            let item = JSON.parse(localStorage.getItem("comentario" + id));
            item.upvotes++;
            localStorage.setItem("comentario" + id, JSON.stringify(item)); // Atualiza o contador no localStorage para permanecer armazenado o valor

            votos["comentario" + id] = 1; // Registra o voto como like
            localStorage.setItem("votos", JSON.stringify(votos));

            let before = document.getElementById("before-wrapper" + id);
            before.classList.add("display");
            before.style.display = "block"; // Exibe o efeito que revela quando recebe like
        } else if (voto == 2) { // Se o comentário já tinha um deslike
            let seta = document.getElementById("upVote" + id);
            let setaContraria = document.getElementById("downVote" + id);
            let valorDeDesLikes = parseInt(setaContraria.textContent);
            let valorDeLikes = parseInt(seta.textContent);
            valorDeDesLikes--;
            valorDeLikes++;
            setaContraria.textContent = valorDeDesLikes; // Remove o deslike
            seta.textContent = valorDeLikes; // Adiciona o like

            let item = JSON.parse(localStorage.getItem("comentario" + id));
            item.upvotes++;
            item.downvotes--;
            localStorage.setItem("comentario" + id, JSON.stringify(item)); // Atualiza os votos no localStorage

            votos["comentario" + id] = 1; // Registra o like no localstorag
            localStorage.setItem("votos", JSON.stringify(votos));

            let before = document.getElementById("before-wrapper" + id);
            before.classList.add("display");
            before.style.display = "block"; // Exibe o efeito que revela quando recebe like
        }
    } else {
        // Caso não existam votos registrados ainda.
        let seta = document.getElementById("upVote" + id);
        let valorDeLikes = parseInt(seta.textContent);
        valorDeLikes++;
        seta.textContent = valorDeLikes;

        let item = JSON.parse(localStorage.getItem("comentario" + id));
        item.upvotes++;
        localStorage.setItem("comentario" + id, JSON.stringify(item));

        let votos = {
            ["comentario" + id]: 1
        };
        localStorage.setItem("votos", JSON.stringify(votos));

        // Aplica o estilo visual para destacar o comentário.
        let before = document.getElementById("before-wrapper" + id);
        before.classList.add("display");
        before.style.display = "block";
    }
}

function darDesLike(id) {
    // Verifica se existem votos registrados no localStorage
    if (localStorage.getItem("votos")) {

        var votos = JSON.parse(localStorage.getItem("votos")); // Pega os votos
        let voto = parseInt(votos["comentario" + id]); // Converte o voto para inteiro

        if (voto == 0) { // Caso o comentário ainda não tenha voto
            let seta = document.getElementById("downVote" + id); // Encontra o botão de deslike
            let valorDeLikes = parseInt(seta.textContent); // Pega a quantidade de deslikes
            valorDeLikes++; // Incrementa o número de deslikes
            seta.textContent = valorDeLikes; // Atualiza o contador de deslikes

            let item = JSON.parse(localStorage.getItem("comentario" + id)); // Pega o comentário
            item.downvotes++; // Incrementa o contador de deslikes
            localStorage.setItem("comentario" + id, JSON.stringify(item)); // Atualiza o comentário no localStorage

            votos["comentario" + id] = 2; // Marca o voto como deslike
            localStorage.setItem("votos", JSON.stringify(votos)); // Atualiza os votos no localStorage

        } else if (voto == 1) { // Caso o comentário já tenha um like
            let seta = document.getElementById("downVote" + id); // Encontra o botão de deslike
            let setaContraria = document.getElementById("upVote" + id); // Encontra o botão de like
            let valorDeDesLikes = parseInt(seta.textContent); // Pega a quantidade de deslikes
            let valorDeLikes = parseInt(setaContraria.textContent); // Pega a quantidade de likes
            valorDeDesLikes++; // Incrementa o número de deslikes
            valorDeLikes--; // Decrementa o número de likes
            seta.textContent = valorDeDesLikes; // Atualiza o contador de deslikes
            setaContraria.textContent = valorDeLikes; // Atualiza o contador de likes

            let item = JSON.parse(localStorage.getItem("comentario" + id)); // Pega o comentário
            item.upvotes--; // Decrementa os likes
            item.downvotes++; // Incrementa os deslikes
            localStorage.setItem("comentario" + id, JSON.stringify(item)); // Atualiza o comentário no localStorage

            votos["comentario" + id] = 2; // Marca o voto como deslike
            localStorage.setItem("votos", JSON.stringify(votos)); // Atualiza os votos no localStorage

            let before = document.getElementById("before-wrapper" + id); // Encontra o efeito visual
            before.classList.add("display"); // Exibe o efeito visual
            before.style.display = "none"; // Esconde o efeito de like
        }
    } else { // Caso não existam votos registrados
        let seta = document.getElementById("downVote" + id); // Encontra o botão de deslike
        let valorDeLikes = parseInt(seta.textContent); // Pega a quantidade de deslikes
        valorDeLikes++; // Incrementa o número de deslikes
        seta.textContent = valorDeLikes; // Atualiza o contador de deslikes

        let item = JSON.parse(localStorage.getItem("comentario" + id)); // Pega o comentário
        item.downvotes++; // Incrementa os deslikes
        localStorage.setItem("comentario" + id, JSON.stringify(item)); // Atualiza o comentário no localStorage

        let votos = { // Cria um novo registro de votos
            ["comentario" + id]: 2
        };
        localStorage.setItem("votos", JSON.stringify(votos)); // Armazena os votos no localStorage
    }
}


// captura o rolamento do scroll da página
window.addEventListener('scroll', function () {
    // Obtém a posição de rolagem vertical da página
    let scrol = window.scrollY;

    // Seleciona o elemento de fundo aonde será aplicado o parallax
    let parallax = document.querySelector('.parallax');

    // Aplica a transformação de translação ao fundo para criar o efeito
    parallax.style.transform = 'translateY(-' + scrol * 0.5 + 'px)';
});