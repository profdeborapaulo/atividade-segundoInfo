//Código para verificar caso o usuário ja está logado

document.addEventListener("DOMContentLoaded", function () {
    
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuarioLogado) {
        alert(`Você já está logado como ${usuarioLogado.nome}.`);
        window.location.href = "../index.html";
    }
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    //Código para verificar se todos os campos do forms estão preenchidos
    
    if (!email || !senha) {
        alert("Preencha todos os campos!!!");
        return;
    }

   //Código para validar o login e redirecionar o usuário a página index, caso não validado emite um alert

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

   
    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
        
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

        alert(`Bem-vindo, ${usuarioEncontrado.nome}!`);
        
        window.location.href = "../index.html"; 
    } else {
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
});

//Código para logout do usuário

document.addEventListener("DOMContentLoaded", function () {
    const logoutLink = document.getElementById("logout");

    if (logoutLink) {
        logoutLink.addEventListener("click", function (event) {
            event.preventDefault(); 
            const usuarioLogado = localStorage.getItem("usuarioLogado");

            if (usuarioLogado) {
              
                localStorage.removeItem("usuarioLogado");

               
                alert("Você foi deslogado!!!");

            } else {
                
                alert("Você não está logado!!!");
            }
        });
    }
});