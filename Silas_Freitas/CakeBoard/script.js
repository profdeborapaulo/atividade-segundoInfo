const actionContainer = document.getElementById('action-container');
const link = document.getElementById('redirect-url');

if (user) {
    // verifica se o usuário existe, se sim muda o botão para levar a dashboard
    actionContainer.innerHTML = `<a href="/dashboard" class="sign-in">Dashboard</a>`;
    link.innerHTML = 'Dashboard';
    link.href = '/dashboard';
}