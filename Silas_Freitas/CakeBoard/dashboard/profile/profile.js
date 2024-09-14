const form  = document.getElementById('form');

form.companyName.value = user.companyName;
form.fantasyName.value = user.fantasyName;
form.cnpj.value = user.cnpj;
form.primaryColor.value = user.primaryColor || '#007bff';

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const companyName = form.companyName.value;
    const fantasyName = form.fantasyName.value;
    const cnpj = form.cnpj.value;
    const primaryColor = form.primaryColor.value

    if (companyName.length < 2) {
        alert('O nome da empresa precisa ter mais que 1 caracter!');
    }

    if (fantasyName.length < 2) {
        alert('O nome fantasia precisa ter mais que 1 caracter!');
    }

    if (users.find(user => user.cnpj === cnpj && user.id !== user.id)) {
        alert('Já existe um usuário com este CNPJ!');
    }

    if (companyName.length < 2) {
        alert('O nome precisa ter mais que 1 caracter!');
    }

    const user = users.find(user => user.id === user.id);

    user.companyName = companyName;
    user.fantasyName = fantasyName;
    user.cnpj = cnpj;
    user.primaryColor = primaryColor;

    // transforma em json e salva no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Perfil atualizado com sucesso!');

    window.location.href = '/dashboard';
});