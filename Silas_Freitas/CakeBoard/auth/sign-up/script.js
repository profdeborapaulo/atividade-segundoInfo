const form = document.getElementById('form');

function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 16; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const companyName = form.companyName.value;
    const fantasyName = form.fantasyName.value;
    const cnpj = form.cnpj.value;
    const id = generateRandomId();

    // obtem os dados do localStorage e transforma em array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
        alert('Email já cadastrado');
        return;
    }
    if (password !== confirmPassword) {
        alert('Senhas não conferem');
        return;
    }
    if (users.find(user => user.cnpj === cnpj)) {
        alert('CNPJ já cadastrado');
        return;
    }

    users.push({ id, email, password, companyName, fantasyName, cnpj, theme: 'dark', primaryColor: '#007bff' });

    // transforma em json e guarda no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso');
    location.href = '/auth/sign-in';
});