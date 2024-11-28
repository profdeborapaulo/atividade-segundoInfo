window.addEventListener('scroll', function() {
    let scrol = window.scrollY; // A posição do scroll na página
    let docHeight = document.documentElement.scrollHeight; // Altura total do documento
    let windowHeight = window.innerHeight; // Altura da janela de visualização
    let scrolPercentage = (scrol / (docHeight - windowHeight)) * 100; // Porcentagem de scroll


    console.log(scrolPercentage); // Exibe a porcentagem do scroll

    let parallax = document.querySelector('.container'); // O elemento com efeito parallax
    parallax.style.transform = 'translateY(-' + scrol * 0.3 + 'px)'; // Aplica o efeito parallax

});