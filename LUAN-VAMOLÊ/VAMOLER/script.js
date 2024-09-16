// Array inicial de livros com imagens
let livros = [
    { titulo: "1984", autor: "George Orwell", imagem: "images/1984.jpg" },
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", imagem: "images/dom-quixote.jpg" }
    // Iam ser esses nomes, mas preferi criar os meus
];

// Função para exibir os livros na página
function exibirLivros() {
    const livrosGrid = document.getElementById('livros-grid');
    livrosGrid.innerHTML = '';  // Limpa a grid para evitar duplicação

    livros.forEach((livro, index) => {
        const livroDiv = document.createElement('div');
        livroDiv.classList.add('livro-card');

        const img = document.createElement('img');
        img.src = livro.imagem;
        img.alt = livro.titulo;

        const h3 = document.createElement('h3');
        h3.textContent = livro.titulo;

        const p = document.createElement('p');
        p.textContent = `Autor: ${livro.autor}`;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('btn-remover');
        botaoRemover.onclick = () => removerLivro(index);

        livroDiv.appendChild(img);
        livroDiv.appendChild(h3);
        livroDiv.appendChild(p);
        livroDiv.appendChild(botaoRemover);

        livrosGrid.appendChild(livroDiv);
    });
}

// Função para adicionar um livro
function adicionarLivro() {
    const titulo = prompt('Digite o título do livro:');
    const autor = prompt('Digite o autor do livro:');
    const imagem = prompt('Digite o URL da imagem do livro:');

    if (titulo && autor && imagem) {
        livros.push({ titulo, autor, imagem });
        exibirLivros();
    } else {
        alert('Por favor, insira todas as informações.');
    }
}

// Função para remover um livro
function removerLivro(index) {
    livros.splice(index, 1);  // Remove o livro pelo índice
    exibirLivros();
}

// Evento para adicionar livro
document.getElementById('adicionar-livro').addEventListener('click', adicionarLivro);

// Exibe os livros ao carregar a página
document.addEventListener('DOMContentLoaded', exibirLivros);7

function validarLogin(event) {
    event.preventDefault(); // Previne o envio do formulário
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simula credenciais de usuário
    const userCredenciais = {
        username: 'Luan',
        password: '12345'
    };


    if (username === userCredenciais.username && password === userCredenciais.password) {
        // Limpa a mensagem de erro, se houver
        errorMessage.style.display = 'none';
        

        window.location.href = 'index.html';
    } else {
      
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        errorMessage.style.display = 'block';
    }
}


document.getElementById('login-form').addEventListener('submit', validarLogin);


function bloquearAcessoSemLogin() {
    if (!localStorage.getItem('logado')) {
        window.location.href = 'login.html';
    }
}

//Verifica o status de login e protege as outras páginas
if (window.location.pathname !== '/login.html') {
    bloquearAcessoSemLogin();
}


//Lista de livros inicialmente
let books = ['Livro 1', 'Livro 2', 'Livro 3', 'Livro 4'];

//Função para renderizar a lista de livros na biblioteca
function renderBooks() {
    const libraryList = document.getElementById('library-list');
    libraryList.innerHTML = '';  // Limpa a lista antes de renderizar
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="img/default-book.jpg" alt="${book}">
            <h3>${book}</h3>
        `;
        libraryList.appendChild(bookCard);
    });
}

//Adiciona um livro ao final do array (método push), professora
function addBook() {
    const bookTitle = document.getElementById('book-title').value;
    if (bookTitle) {
        books.push(bookTitle);
        renderBooks();  //Atualiza a lista de livros
        document.getElementById('book-title').value = '';  // Limpa o campo de texto
    } else {
        alert('Digite um título para o livro!');
    }
}

// Remove o último livro da lista (método pop)
function removeLastBook() {
    if (books.length > 0) {
        books.pop();
        renderBooks();  // Atualiza a lista de livros
    } else {
        alert('Nenhum livro para remover!');
    }
}

//Adiciona um livro ao início da lista (método unshift)
function addBookToStart() {
    const bookTitle = document.getElementById('book-title').value;
    if (bookTitle) {
        books.unshift(bookTitle);
        renderBooks();  // Atualiza a lista de livros
        document.getElementById('book-title').value = '';  // Limpa o campo de texto
    } else {
        alert('Digite um título para o livro!');
    }
}

//Remove um livro de uma posição específica (método splice)
function removeSpecificBook() {
    const bookIndex = prompt('Digite o número do livro para remover (1 a ' + books.length + '):');
    const index = parseInt(bookIndex) - 1;
    if (index >= 0 && index < books.length) {
        books.splice(index, 1);
        renderBooks();  // Atualiza a lista de livros
    } else {
        alert('Número inválido!');
    }
}

//Chama a função para exibir a lista de livros ao carregar a página
window.onload = renderBooks;