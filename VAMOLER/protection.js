if (localStorage.getItem('isLoggedIn') !== 'true') {
    // Se não estiver logado, redirecionar para a página de login
    window.location.href = 'login.html';
}