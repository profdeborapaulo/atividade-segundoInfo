
const navLinks = document.querySelectorAll(".nav-menu .nav-link")//Seleciona todos os links dentro da classe
const menuOpenButton = document.querySelector("#menu-open-button");//Seleciona o botão de abrir
const menuCloseButton = document.querySelector("#menu-close-button");//Seleciona o botão de fechar

//Adiciona evento de clique no botao de abrir
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu"); //Alterna a classe 'show-mobile-menu' no body
})

//Adiciona evento de clique ao botão de fechar menu
menuCloseButton.addEventListener("click", () => menuOpenButton.click())

// Adiciona um evento de clique a cada link de navegação para fechar o menu ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
});

// Inicializa o Swiper (biblioteca de slides)
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullet: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});
