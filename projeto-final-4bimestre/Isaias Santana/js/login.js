// Adiciona um evento de submissão ao formulário com o ID "loginForm"
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede que a página seja recarregada ao enviar o formulário

    // Recupera os usuários cadastrados do localStorage ou inicializa com uma lista vazia
    let usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];

    // Obtém os valores inseridos no formulário de login
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

        // Validação simples de campos vazios
    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verifica se existe um usuário que corresponda ao e-mail e senha informados
    let usuarioValido = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuarioValido) {
        // Define o usuário ativo no localStorage
        localStorage.setItem("usuarioAtivo", email);

        // Exibe um alerta de sucesso e redireciona o usuário para a próxima página
        alert("Login bem-sucedido!");
        window.location.href = "contador.html";
    } else {
        // Exibe um alerta de erro caso o e-mail ou senha estejam incorretos
        alert("E-mail ou senha incorretos!");
    }
});
