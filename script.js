// Função para carregar os desenhos do localStorage
function carregarDesenhos() {
    const desenhosSalvos = localStorage.getItem('desenhos'); // Tenta buscar o array de desenhos do localStorage
    return desenhosSalvos ? JSON.parse(desenhosSalvos) : []; // Converte de JSON para um array ou retorna um array vazio
}

// Função para salvar os desenhos no localStorage
function salvarDesenhos(desenhos) {
    localStorage.setItem('desenhos', JSON.stringify(desenhos)); // Converte o array de desenhos para uma string JSON e salva no localStorage
}

// Array inicial que carrega os desenhos salvos do localStorage
let desenhos = carregarDesenhos();

// Função para exibir os desenhos na tela
function exibirDesenhos() {
    const container = document.getElementById('container-desenhos');
    const mensagemVazia = document.getElementById('mensagem-vazia');

    // Verifica se o array de desenhos está vazio e mostra a mensagem se necessário
    if (desenhos.length === 0) {
        mensagemVazia.style.display = 'block'; // Exibe a mensagem se não houver desenhos
    } else {
        mensagemVazia.style.display = 'none'; // Esconde a mensagem se houver desenhos
    }

    container.innerHTML = ''; // Limpa o container

    // Cria um cartão para cada desenho no array
    desenhos.forEach((desenho, indice) => {
        const cartao = document.createElement('div');
        cartao.className = 'card';

        cartao.innerHTML = `
            <img src="${desenho.imagem}" alt="${desenho.nome}">
            <h3>${desenho.nome}</h3>
            <button onclick="assistirDesenho('${desenho.video}')">Assistir</button>
            <button class="botao-remover" onclick="removerDesenho(${indice})">Remover</button>
        `;

        container.appendChild(cartao);
    });
}

// Função para converter o URL do YouTube para o formato embed
function converterParaEmbed(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/live\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url; // Retorna o formato embutível se a correspondência for encontrada
}

// Função para redirecionar para a página de assistir o desenho
function assistirDesenho(urlVideo) {
    // Converte o URL para o formato embutível do YouTube
    const urlEmbed = converterParaEmbed(urlVideo);

    // Redireciona para a página assistir.html com o vídeo do desenho
    window.location.href = `assistir.html?video=${encodeURIComponent(urlEmbed)}`;
}

// Função para remover um desenho da biblioteca
function removerDesenho(indice) {
    desenhos.splice(indice, 1); // Remove o desenho do array pelo índice
    salvarDesenhos(desenhos); // Salva o array atualizado no localStorage
    exibirDesenhos(); // Atualiza a exibição dos desenhos na tela
}

// Função para adicionar um desenho
function adicionarDesenho(evento) {
    evento.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos de entrada
    const nome = document.getElementById('nome').value;
    const imagem = document.getElementById('imagem').value;
    const video = document.getElementById('video').value;

    // Adiciona o desenho ao array
    desenhos.push({ nome, imagem, video });

    // Salva o array de desenhos atualizado no localStorage
    salvarDesenhos(desenhos);

    // mensagem de confirmação
    alert('Você adicionou uma relíquia! Volte à biblioteca para visualizá-la.');

    // Limpa o formulário
    document.getElementById('formulario-adicionar').reset();
}

// Adiciona o evento ao formulário quando a página é carregada
if (document.getElementById('formulario-adicionar')) {
    document.getElementById('formulario-adicionar').addEventListener('submit', adicionarDesenho);
}

// Exibe os desenhos iniciais quando a página carrega, se estiver na biblioteca
if (document.getElementById('container-desenhos')) {
    exibirDesenhos();
}
