const name = document.getElementById('companyName');

if (name) {
    // Muda o nome no header pelo nome da empresa
    name.innerHTML += `${user.fantasyName}!`;
}

function logOut () {
    // função de logout
    localStorage.removeItem('userId');
    window.location.href = '/auth/sign-in';
}