// Função para salvar novos dados no servidor.
function saveData(newValues) {
    fetch('/salvar', {
        method: 'POST', // Método HTTP POST para enviar os dados.
        headers: {
            'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON.
        },
        body: JSON.stringify({
            data: newValues, // Os novos dados a serem salvos.
            pathern: 'users.json', // O arquivo JSON onde os dados serão armazenados.
        }), // Converte o objeto para JSON antes de enviar.
    })
        .then(response => {
            if (response.ok) {
                console.log('Dado adicionado com sucesso');
                carregarDados(); // Atualiza os dados na página após salvar.
            } else {
                console.error('Erro ao salvar o dado');
            }
        })
        .catch(error => console.error('Erro ao enviar os dados:', error)); // Captura erros de envio.
}

// Função para carregar dados do servidor e processar conforme a ação do usuário.
function carregarDados(choice) {
    fetch('/dadosUsers') // Requisição ao endpoint para buscar os usuários.
        .then(response => response.json()) // Converte a resposta para JSON.
        .then(data => {
            console.log(data); // Exibe os dados carregados para depuração.

            // Caso uma ação tenha sido passada, processa a lógica correspondente.
            if (choice) {
                console.log(choice);

                if (choice === 1) { // Processo de login.
                    console.log('entrou no 1');

                    const username = document.getElementById('username').value; // Obtém o nome de usuário.
                    const password = document.getElementById('password').value; // Obtém a senha.

                    // Verifica se todos os campos estão preenchidos.
                    if (username == '' || password == '') {
                        errorSignin.innerHTML = 'Preencha todos os campos!';
                        return;
                    }

                    let verify = 0; // Variável para verificar se o usuário existe.
                    data.forEach((iten) => {
                        if (iten.username == username && iten.password == password) {
                            verify = iten.userId; // Obtém o ID do usuário se válido.
                        }
                    });

                    console.log(verify);
                    if (verify > 0) { // Usuário válido.
                        sessionStorage.setItem('username', username); // Armazena o nome no sessionStorage.
                        sessionStorage.setItem('userId', verify); // Armazena o ID do usuário.
                        window.location.href = '../views/menu.html'; // Redireciona para a página inicial.
                    } else {
                        errorSignin.innerHTML = 'Dados Incorretos!'; // Exibe erro se as credenciais forem inválidas.
                    }
                }

                if (choice === 2) { // Processo de cadastro.
                    console.log('entrou no 2');

                    // Obtém os valores dos campos de entrada.
                    const newName = document.getElementById('newName').value;
                    const newSurname = document.getElementById('newSurname').value;
                    const newUsername = document.getElementById('newUsername').value;
                    const newPassword = document.getElementById('newPassword').value;
                    const newPasswordConfirm = document.getElementById('newPasswordConfirmation').value;

                    // Verifica se todos os campos estão preenchidos.
                    if (newName == '' || newSurname == '' || newUsername == '' || newPassword == '' || newPasswordConfirm == '') {
                        errorSignup.innerHTML = 'Preencha todos os campos!';
                        return;
                    }

                    // Verifica se as senhas coincidem.
                    if (newPassword !== newPasswordConfirm) {
                        errorSignup.innerHTML = 'As senhas não estão iguais!';
                        return;
                    }

                    // Cria um novo objeto com os dados do usuário.
                    const newData = {
                        name: newName + ' ' + newSurname, // Nome completo.
                        username: newUsername, // Nome de usuário.
                        password: newPassword, // Senha.
                        userId: data.length, // ID único baseado no tamanho do array.
                    };

                    if (data.length == 0) { // Caso não haja usuários no sistema.
                        console.log("data = 0");
                        sessionStorage.setItem('username', username); // Armazena o nome no sessionStorage.
                        sessionStorage.setItem('userId', data.length); // Armazena o ID do usuário.
                        saveData(newData); // Salva os dados no servidor.
                        window.location.href = "../views/menu.html"; // Redireciona para a página inicial.
                    } else {
                        const i = [];
                        // Verifica se o nome de usuário já existe.
                        data.forEach((iten) => {
                            if (iten.username == newUsername) {
                                i.push('invalid');
                            }
                        });

                        if (i.includes('invalid')) { // Nome de usuário já existente.
                            errorSignup.innerHTML = 'Usuário já existe, tente outro nome';
                            return;
                        }
                        sessionStorage.setItem('username', username); // Armazena o nome no sessionStorage.
                        sessionStorage.setItem('userId', data.length); // Armazena o ID do usuário.
                        saveData(newData); // Salva os dados no servidor.
                        window.location.href = "../views/menu.html"; // Redireciona para a página inicial.
                    }
                    console.error("Choice possui um valor inválido!"); // Loga erro caso `choice` seja inválido.
                    return;
                }
            }
        })
        .catch(error => console.error('Erro ao carregar os dados:', error)); // Captura erros na requisição.
}

// Seleciona os elementos relacionados aos campos de login e cadastro.
const camp = document.querySelectorAll('.camp1');

// Seleciona os botões de alternância e envio.
const btt = document.querySelectorAll('#actionBtt');
const sendBtt = document.querySelectorAll('#send');
const [signinBtt, signupbtt] = sendBtt; // Desestruturação para obter botões específicos.

// Seleciona os elementos de exibição de erro.
const errorMsg = document.querySelectorAll('#errorMsg');
const [errorSignin, errorSignup] = errorMsg;

// Adiciona eventos de clique aos botões de alternância entre login e cadastro.
btt.forEach(iten => {
    const [signin, signup] = camp;

    iten.addEventListener('click', () => {
        errorSignin.innerHTML = ''; // Limpa mensagens de erro do login.
        errorSignup.innerHTML = ''; // Limpa mensagens de erro do cadastro.

        // Alterna a visibilidade entre os campos de login e cadastro.
        signin.classList.toggle('itenSelected');
        signup.classList.toggle('itenSelected');
    });
});

let c = null; // Variável para armazenar a escolha do usuário (login ou cadastro).

// Adiciona evento de clique ao botão de login.
signinBtt.addEventListener('click', () => {
    c = 1; // Define a ação como login.
    carregarDados(c); // Chama a função de processamento de dados.
});

// Adiciona evento de clique ao botão de cadastro.
signupbtt.addEventListener('click', () => {
    c = 2; // Define a ação como cadastro.
    carregarDados(c); // Chama a função de processamento de dados.
});
