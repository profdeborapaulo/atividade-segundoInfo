let indice = 0;

function mudarImagem(direcao) {
    const imagens = document.querySelector('.imagens');
    const totalImagens = document.querySelectorAll('.imagem').length;
    indice += direcao;

    if (indice < 0) {
        indice = totalImagens - 1;
    } else if (indice >= totalImagens) {
        indice = 0;
    }

    imagens.style.transform = `translateX(${-indice * 100}%)`;
}