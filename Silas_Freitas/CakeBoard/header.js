const name = document.getElementById('companyName');

if (name) {
    name.innerHTML += `${user.fantasyName}!`;
}

function logOut () {
    localStorage.removeItem('userId');
    window.location.href = '/auth/sign-in';
}