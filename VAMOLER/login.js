document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obter valores dos campos
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de autenticação (você pode substituir por autenticação real)
    if (username === 'admin' && password === '12345') {
        // Guardar no localStorage que o usuário está logado
        localStorage.setItem('isLoggedIn', 'true');
        // Redirecionar para a página inicial
        window.location.href = 'index.html';
    } else {
        // Mostrar mensagem de erro
        document.getElementById('error-message').style.display = 'block';
    }
});