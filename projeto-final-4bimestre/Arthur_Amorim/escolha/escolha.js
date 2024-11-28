// Adiciona um evento de "mousemove" à janela para rastrear o movimento do mouse
window.addEventListener('mousemove', function(event) {

    // Seleciona o fundo
    var parallax = document.querySelector('.container');

    // Obtém a posição atual do cursor em relação à janela
    let mouseX = event.clientX; // Coordenada X do mouse
    let mouseY = event.clientY; // Coordenada Y do mouse

    // Calcula o centro da janela
    let centroX = window.innerWidth / 2; // Metade da largura da janela
    let centroY = window.innerHeight / 2; // Metade da altura da janela

    // calcula a posição do mouse em relação ao centro da tela e suavisa a intensiidade do movimento ao multiplicar por 5
    let posX = (mouseX - centroX) * 0.05; // Deslocamento horizontal
    let posY = (mouseY - centroY) * 0.05; // Deslocamento vertical

    // O fundo mexe na direção do movimento do mouse de forma suavizada
    parallax.style.transform = `translate(${posX}px, ${posY}px)`;
});