
//Código para a realização do cadastro

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

   
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

   //Código para verificar se todos os campos estão preenchidos

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

   //Código para caso o email ja estaja cadastrado, emitir um alert

    const emailJaCadastrado = usuarios.some((usuario) => usuario.email === email);
    if (emailJaCadastrado) {
        alert("Este e-mail já está cadastrado. Por favor, faça login ou use outro e-mail.");
        return;
    }

    //Código para cadastrar novo usuario

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha, 
    };

    
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");

   
    window.location.href = "Login.html";
});

//Código JS para o botão de logout

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