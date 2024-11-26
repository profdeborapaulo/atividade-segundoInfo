
// código para o login funcionar, vai verificar se a senha está correta, caso não esteja, significa que não é o ADM e vai mostrar uma mensagem "usuário não autenticado"

//quando o formulário for enviado a função será chamada
//criando função de autenticar, ela vai receber um parâmentro chamado mensagem:
function autenticar(mensagem) {

    //evitar que quando o formulário seja recarregado quando for enviado
    mensagem.preventDefault();

    // uma váriavel chamada usuario, e ela vai ser pega no html, com o ID de login
    // "document.getElementById('login')" pega o elemento HTML com id "login"
    // ".value" obtém o valor digitado nesse campo, ou seja, o texto inserido pelo usuário.
    let usuario = document.getElementById("login").value;

    // uma váriavel chamada senha, e ela vai ser pega no html, com o ID de senha
    // "document.getElementById('senha')" , faz a mesma coisa do anterior, mas pegando o elemento HTML com id "senha"
    // ".value" obtém o valor digitado nesse campo, ou seja, a senha inserida.
    let senha = document.getElementById("senha").value;

    /*aqui vai funcionar assim: se o usuario e a senha, estiverem de acordo com o que já tem como condição
     que é adm123 e 123adm, então vai ser colocada uma mensagem "usuario autenticado" 
     e além da mensagem vai exibir um alert dizendo "você foi logado como adm", depois disso a pessoa será 
     encaminhada para a pagina de produtos do adm, que tem  uma unica diferença, que é o botão que vai levar para cadastro de produtos*/
    if (usuario === "adm123" && senha === "123adm") {
        document.getElementById("mensagem").innerHTML = "usuário autenticado.";
        alert("você foi logado como adm");
        window.location.href = "produtoadm.html"
    } /* caso não seja a senha que foi colocada como condição, vai aparecer uma mensagem: "usuário não autenticado" */
    else {
        document.getElementById("mensagem").innerHTML = "usuário não identificado.";
    }

    // o .innerhtml tem a função de definir o conteudo interno do elemento, que no caso é a mensagem. que está logo embaixo do botão.
}

