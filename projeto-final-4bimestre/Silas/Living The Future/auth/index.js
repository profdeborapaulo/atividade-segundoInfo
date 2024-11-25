// Seleciona os botões de "Sign Up" e "Sign In" e o container principal
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Adiciona um evento ao botão de "Sign Up" para alternar o painel
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active"); // Adiciona uma classe para exibir o painel de registro
});

// Adiciona um evento ao botão de "Sign In" para alternar o painel
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active"); // Remove a classe para exibir o painel de login
});

// Seleciona o campo de entrada do CPF
const cpfInput = document.querySelector('input[name="cpf"]');

// Formata o CPF automaticamente durante a entrada de dados
cpfInput.addEventListener('input', () => {
    cpfInput.value = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpfInput.value = cpfInput.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Adiciona a máscara do CPF
});

// Adiciona evento de envio para todos os formulários (login e registro)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Determina qual função chamar com base no tipo do formulário
        const response = event.target.dataset.form === 'sign-in' ? signIn(event.target) : signUp(event.target);
        if (response) {
            window.location.href = '/'; // Redireciona para a página inicial se o login/registro for bem-sucedido
        }
    });
});

// Função para lidar com o login
function signIn(form) {
    const email = form.email.value; // Obtém o email do formulário
    const password = form.password.value; // Obtém a senha do formulário

    // Verifica se o usuário existe na lista de usuários
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        alert('Usuário não encontrado'); // Exibe um alerta se o usuário não for encontrado
        return;
    }

    if (user.password !== password) {
        alert('Senha incorreta'); // Exibe um alerta se a senha estiver incorreta
        return;
    }

    localStorage.setItem('userId', user.id); // Armazena o ID do usuário no localStorage

    return true; // Indica que o login foi bem-sucedido
}

// Função para lidar com o registro
function signUp(form) {
    const name = form.name.value; // Obtém o nome do formulário
    const email = form.email.value; // Obtém o email do formulário
    const password = form.password.value; // Obtém a senha do formulário
    const confirmPassword = form.confirmPassword.value; // Obtém a confirmação de senha
    const cpf = form.cpf.value; // Obtém o CPF do formulário

    // Validações:
    if (password !== confirmPassword) {
        alert('Senhas não conferem'); // Verifica se as senhas são iguais
        return;
    }

    if (users.find(user => user.email === email)) {
        alert('Email já cadastrado'); // Verifica se o email já está registrado
        return;
    }

    if (cpf.length !== 14) { // Valida o formato do CPF (com máscara)
        alert('CPF inválido');
        return;
    }

    if (users.find(user => user.cpf === cpf)) {
        alert('CPF já cadastrado'); // Verifica se o CPF já está registrado
        return;
    }

    if (password.length < 8) {
        alert('Senha muito curta! Mínimo de 8 caracteres'); // Verifica o tamanho da senha
        return;
    }

    // Cria um novo objeto de usuário
    const user = {
        id: Date.now().toString() + (Math.floor(Math.random() * 1000000)).toString(), // Gera um ID único
        name,
        email,
        password,
        cpf
    };

    users.push(user); // Adiciona o novo usuário à lista de usuários

    localStorage.setItem('users', JSON.stringify(users)); // Salva a lista de usuários no localStorage

    localStorage.setItem('userId', user.id); // Armazena o ID do novo usuário no localStorage

    return true; // Indica que o registro foi bem-sucedido
}
