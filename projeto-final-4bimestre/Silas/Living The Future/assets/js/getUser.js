// obtém o id do usuário do localStorage do navegador
const userId = localStorage.getItem('userId');

// obtém os usuários do localStorage, verifica se ele existe, se sim transforma em array, se não será um array vazio
const users = JSON.parse(localStorage.getItem('users')) || [];

// procura o usuario na lista pelo seu id
const user = users.find(user => user.id === userId);

const orders = JSON.parse(localStorage.getItem('orders')) || [];

// caso não exista usuário e ele não estiver nas paginas de login, cadastro ou pagina inicial ele redireciona para a pagina de login
if (!user && window.location.href.includes('/profile')) {
    window.location.href = '/auth/sign-in/';
}

// caso exista o usuário, ele não permite que o mesmo acesse a pagina de login ou cadastro
if (user && (window.location.pathname.includes('/auth'))) {
    window.location.href = '/';
};