// obtém o id do usuário do localStorage do navegador
const userId = localStorage.getItem('userId');

// obtém os usuários do localStorage, verifica se ele existe, se sim transforma em array, se não será um array vazio
const users = JSON.parse(localStorage.getItem('users')) || [];

// procura o usuario na lista pelo seu id
const user = users.find(user => user.id === userId);

// caso não exista usuário e ele não estiver nas paginas de login, cadastro ou pagina inicial ele redireciona para a pagina de login
if (!user && !window.location.pathname.includes('/auth/sign-in') && !window.location.pathname.includes('/auth/sign-up') && window.location.pathname !== '/') {
    window.location.href = '/auth/sign-in/';
}

// caso exista o usuário, ele não permite que o mesmo acesse a pagina de login ou cadastro
if (user && (window.location.pathname.includes('/auth/sign-in') || window.location.pathname.includes('/auth/sign-up'))) {
    window.location.href = '/dashboard';
};

// obtém o root do CSS
const root = document.querySelector(':root');

if (user) {
    // define as cores do usuário a partir da cor que ele escolheu e seu tema
    root.style.setProperty('--primary-color', user.primaryColor);
    
    if (user.theme === 'dark') {
        root.style.setProperty('--bg-color', '#333');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--bg-color-secondary', '#444');
        root.style.setProperty('--thead-bg-color', '#555');
        root.style.setProperty('--item-list-bg-color', '#444');
        root.style.setProperty('--border-color', '#555');
        root.style.setProperty('--header-bg-color', '#222');
    } else {
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--bg-color-secondary', '#f5f5f5');
        root.style.setProperty('--thead-bg-color', '#f0f0f0');
        root.style.setProperty('--item-list-bg-color', '#f5f5f5');
        root.style.setProperty('--border-color', '#e0e0e0');
        root.style.setProperty('--header-bg-color', '#fff');
    }

}


function changeTheme() {
    // função de mudar o tema
    const theme = user.theme === 'dark' ? 'light' : 'dark';
    user.theme = theme;
    localStorage.setItem('users', JSON.stringify(users));
    if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#333');
        root.style.setProperty('--text-color', '#fff');
        root.style.setProperty('--bg-color-secondary', '#444');
        root.style.setProperty('--thead-bg-color', '#555');
        root.style.setProperty('--item-list-bg-color', '#444');
        root.style.setProperty('--border-color', '#555');
        root.style.setProperty('--header-bg-color', '#222');
    } else {
        root.style.setProperty('--bg-color', '#fff');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--bg-color-secondary', '#f5f5f5');
        root.style.setProperty('--thead-bg-color', '#f0f0f0');
        root.style.setProperty('--item-list-bg-color', '#f5f5f5');
        root.style.setProperty('--border-color', '#e0e0e0');
        root.style.setProperty('--header-bg-color', '#fff');
    }
}