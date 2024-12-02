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
//Função para criar um id baseado no tempo criado
function geradorID() {
    return Date.now(); 
}
//Verifica a se a janela é a do formulário
if (window.location.pathname.includes('adicionar.html')) {
    const addForm = document.getElementById('formularioadd');
    //Verifica o envio do formulário, previne o comportamento padrão e chama a função addNoticia
    addForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        addNoticia();     
    });

//Função de adicionar uma notícia
function addNoticia() {
    //Coleta de dados do formulário
    const tituloNoticia = document.getElementById('titulo').value;
    const textoNoticia = document.getElementById('texto').value;
    const imagemNoticia = document.getElementById('imagem').value;    
    //Adicinar os dados no local storage      
    let noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    const novaNoticia = {
        id_noticia: geradorID(), 
        titulo: tituloNoticia,
        texto: textoNoticia,
        imagem: imagemNoticia,
    };
    
    noticias.push(novaNoticia);

    localStorage.setItem('noticias', JSON.stringify(noticias));
    //Reset do formulário
    addForm.reset();
    //Redirect para a página de notícias 
    window.location.href = "noticias.html";
};
}
//Verifica se está na página de notíccias
if (window.location.pathname.includes('noticias.html')) {
    //Coleta as notíciasarmazenadas no localstorage 
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    const container = document.getElementById('noticiascontainer');
       //Cria novos elementos, insere as informações baseada nos dados da notícia e adiciona ao container
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
//Verifica se o URL da página é de uma notícia
if (window.location.pathname.includes('pagina.html')) {
//Verifica se a página carregou e chama a função de verificação
window.addEventListener('load', () => {
    verificarPagina();
});
//Função de editar a página e verificar a notícia selecionada com base no ID
function verificarPagina() {
    //Coleta de dados
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    const url = new URL(window.location.href);
    //Verificação do ID do URL
    const parametros = new URLSearchParams(url.search);
    const id = parametros.get('id');
    //Pesquisa por meio do ID do URL
    const noticiaSelecionada = noticias.find(noticia => noticia.id_noticia == id);

    selecionarNoticia(noticiaSelecionada);
}
//Função para editar a página com base na notícia com o ID correspondente ao URL
function selecionarNoticia(noticiaSelecionada) {
    //Edição dos elementos adicionados no HTML
    const img = document.getElementById('img');
    img.src = noticiaSelecionada.imagem;

    const titulo = document.getElementById("titulo");
    titulo.textContent = noticiaSelecionada.titulo;

    const texto = document.getElementById("texto");
    texto.textContent = noticiaSelecionada.texto;
}
}
