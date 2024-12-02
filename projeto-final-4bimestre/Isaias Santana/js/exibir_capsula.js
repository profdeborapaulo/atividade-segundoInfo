// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Recupera a lista de usuários e o usuário ativo do localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
    const usuarioAtivo = localStorage.getItem("usuarioAtivo");
    const usuario = usuarios.find(user => user.email === usuarioAtivo);

    // Verifica se o usuário e a cápsula existem
    if (!usuario || !usuario.capsula) {
        document.getElementById("capsula").innerHTML = "<p>Nenhuma cápsula encontrada!</p>"; // Exibe mensagem se não houver cápsula
        return; // Interrompe a execução caso a cápsula não seja encontrada
    }

    // Desestrutura o conteúdo da cápsula (texto e arquivos)
    const { texto, arquivos } = usuario.capsula;
    document.getElementById("mensagem").innerText = texto; // Exibe o texto da cápsula

    const arquivosContainer = document.getElementById("arquivos"); // Container onde os arquivos serão exibidos

    // Itera sobre os arquivos da cápsula e os exibe de acordo com o tipo
    arquivos.forEach(arquivo => {
        const fileElement = document.createElement("div");
        fileElement.className = "arquivo-item"; // Classe para cada item de arquivo

        // Exibe imagens
        if (arquivo.nome.match(/\.(jpg|jpeg|png|gif)$/)) {
            const img = document.createElement("img");
            img.src = arquivo.conteudo;
            img.alt = arquivo.nome;
            fileElement.appendChild(img);

        // Exibe vídeos
        } else if (arquivo.nome.match(/\.(mp4|webm|ogg)$/)) {
            const video = document.createElement("video");
            video.src = arquivo.conteudo;
            video.controls = true;
            fileElement.appendChild(video);

        // Exibe links para download de outros arquivos
        } else {
            const link = document.createElement("a");
            link.href = arquivo.conteudo;
            link.download = arquivo.nome;
            link.innerText = `Baixar ${arquivo.nome}`;
            fileElement.appendChild(link);
        }

        arquivosContainer.appendChild(fileElement); // Adiciona o item ao container
    });

    let currentIndex = 0; // Índice do arquivo atual no carrossel

    // Função para atualizar o carrossel e mover os itens
    const updateCarousel = () => {
        const items = document.querySelectorAll(".arquivo-item"); // Todos os itens de arquivo
        const totalItems = items.length;
        const newTransformValue = -currentIndex * 100; // Define o valor da transformação para mover o carrossel

        arquivosContainer.style.transform = `translateX(${newTransformValue}%)`; // Aplica a transformação de movimento

        // Atualiza a visibilidade dos botões de navegação
        document.querySelector(".prev-btn").style.display = currentIndex === 0 ? "none" : "block";
        document.querySelector(".next-btn").style.display = currentIndex === totalItems - 1 ? "none" : "block";
    };

    // Evento de clique no botão "anterior" do carrossel
    document.querySelector(".prev-btn").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--; // Move para o arquivo anterior
            updateCarousel(); // Atualiza o carrossel
        }
    });

    // Evento de clique no botão "próximo" do carrossel
    document.querySelector(".next-btn").addEventListener("click", () => {
        if (currentIndex < arquivos.length - 1) {
            currentIndex++; // Move para o próximo arquivo
            updateCarousel(); // Atualiza o carrossel
        }
    });

    // Inicializa o carrossel
    updateCarousel();
});
