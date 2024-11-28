class MobileNavbar {
    // Recebe o seletor dos elementos que vão ser manipulados
    constructor(mobileMenu, navList, navLinks) {
        // Seleciona o elemento do menu mobile (hamburguer menu) com o seletor CSS passado
        this.mobileMenu = document.querySelector(mobileMenu);
        // Seleciona a lista de navegação (navList) que contém os links
        this.navList = document.querySelector(navList);
        // Seleciona todos os links dentro da lista de navegação (navLinks)
        this.navLinks = document.querySelectorAll(navLinks);

        // Define a classe "active" que será usada para alternar o estado
        this.activeClass = "active";

        // Faz um bind no método handClick para que "this" sempre se refira à instância da classe
        this.handClick = this.handClick.bind(this);
    }

    // Anima os links quando o menu estiver aberto ou fechado
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    // Método chamado quando o menu mobile é clicado
    handClick() {
        // Alterna a classe "active" na lista de navegação para abrir/fechar o menu
        this.navList.classList.toggle(this.activeClass);
        // Alterna a classe "active" no ícone do menu mobile (hamburguer menu)
        this.mobileMenu.classList.toggle(this.activeClass);
        // Chama o método animateLinks para animar os links de navegação
        this.animateLinks();
    }

    // Método que adiciona o evento de clique ao menu mobile (hamburguer menu)
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handClick);
    }

    // Método de inicialização do menu mobile
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// Criação de uma nova instância da classe MobileNavbar passando os seletores CSS para o menu mobile, a lista de navegação e os links
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",  // Seletor do ícone do menu mobile (hamburguer menu)
    ".nav-list",     // Seletor da lista de navegação
    ".nav-list li"   // Seletor dos itens de navegação (links)
);

// Inicializa a navegação mobile chamando o método init
mobileNavbar.init();
