//Animação da barra lateral caso a tela tenha menos de 1000px de largura
document.addEventListener('DOMContentLoaded', function(){
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobilemenu",
    ".navlist",
    ".navlist li",
);
mobileNavbar.init();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function geradorID() {
    return Date.now(); 
}

if (window.location.pathname.includes('adicionar.html')) {
    const addForm = document.getElementById('formularioadd');
    addForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        addNoticia();     
    });


function addNoticia() {
    const tituloNoticia = document.getElementById('titulo').value;
    const textoNoticia = document.getElementById('texto').value;
    const imagemNoticia = document.getElementById('imagem').value;    
             
    let noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    const novaNoticia = {
        id_noticia: geradorID(), 
        titulo: tituloNoticia,
        texto: textoNoticia,
        imagem: imagemNoticia,
    };
    
    noticias.push(novaNoticia);

    localStorage.setItem('noticias', JSON.stringify(noticias));

    addForm.reset();

    window.location.href = "noticias.html";
};
}

if (window.location.pathname.includes('noticias.html')) {
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    const container = document.getElementById('noticiascontainer');
      
        noticias.forEach((noticia) => {
        const noticiaDiv = document.createElement('div');
        noticiaDiv.className = 'noticia';
        noticiaDiv.id = "noticia";
        
       const imagem = document.createElement('img');
       imagem.src = noticia.imagem;
       noticiaDiv.appendChild(imagem);
      
       const titulo = document.createElement('h1');
       titulo.textContent = noticia.titulo;
       noticiaDiv.appendChild(titulo);
      
      
       const link = document.createElement('a');
       link.href = `pagina.html?id=${noticia.id_noticia}`;
      
       link.appendChild(noticiaDiv);
      
       container.appendChild(link);
    });
}
});

if (window.location.pathname.includes('pagina.html')) {
    
window.addEventListener('load', () => {
    processarPagina();
});

function processarPagina() {
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    const url = new URL(window.location.href);
    const parametros = new URLSearchParams(url.search);
    const id = parametros.get('id');

    const noticiaSelecionada = noticias.find(noticia => noticia.id_noticia == id);

    selecionarNoticia(noticiaSelecionada);
}

function selecionarNoticia(noticiaSelecionada) {

    const img = document.getElementById('img');
    img.src = noticiaSelecionada.img;

    const titulo = document.getElementById("titulo");
    titulo.textContent = noticiaSelecionada.titulo;

    const texto = document.getElementById("texto");
    texto.textContent = noticiaSelecionada.texto;
}
}