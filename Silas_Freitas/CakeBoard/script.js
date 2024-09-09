const actionContainer = document.getElementById('action-container');
const link = document.getElementById('redirect-url');

if (user) {
    actionContainer.innerHTML = `<a href="/dashboard" class="sign-in">Dashboard</a>`;
    link.innerHTML = 'Dashboard';
    link.href = '/dashboard';
}