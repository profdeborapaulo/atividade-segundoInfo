// Adiciona um evento de submissão ao formulário com o ID "userForm"
document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede que a página recarregue ao enviar o formulário

  // Recupera os usuários cadastrados do localStorage ou inicializa com uma lista vazia
  let usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];

  // Obtém os valores inseridos no formulário
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("password").value;

  // Validação simples de campos vazios
  if (!username || !email || !senha) {
    alert("Todos os campos são obrigatórios!");
    return;
  }

  // Verifica se o e-mail já está cadastrado
  if (usuarios.some((user) => user.email === email)) {
      alert("E-mail já cadastrado!"); // Exibe um alerta e interrompe a execução
      return;
  }

  // Cria um objeto representando o novo usuário
  const NovoUser = {
      username: username,  // Nome de usuário
      email: email,        // E-mail
      senha: senha,        // Senha
      futureDate: "",      // Campo para uma data futura (inicialmente vazio)
  };

  // Adiciona o novo usuário ao array de usuários
  usuarios.push(NovoUser);

  // Salva a lista de usuários atualizada no localStorage
  localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));

  // Define o novo usuário como o "usuário ativo" no localStorage
  localStorage.setItem("usuarioAtivo", email);

  // Exibe uma mensagem de sucesso e redireciona para a próxima página
  alert("Usuário cadastrado e ativo!");
  window.location.href = "criar_capsula.html";
});
