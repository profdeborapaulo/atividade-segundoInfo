
//Código para o efeito de digitação do texto da imagem inicial

function typingEffect(elementId, text, speed) {
    let index = 0;
    const element = document.getElementById(elementId);

    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed); 
        }
    }

    type(); 
}

//Código para definir o texto e a velocidade da mensagem

typingEffect("text", "Bem-Vindo Ao Nosso Site De Viagens Interplanetárias!", 50);
typingEffect("text2", "Nós temos os melhores preços do mercado!!!", 40);


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