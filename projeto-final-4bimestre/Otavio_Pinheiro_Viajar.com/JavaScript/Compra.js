
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

//Código para dados do produto selecionado e mostrar na tela

  document.addEventListener("DOMContentLoaded", function () {
    const produtoSelecionado = localStorage.getItem("produtoSelecionado");

    if (produtoSelecionado) {
        const produto = JSON.parse(produtoSelecionado);

        
        document.getElementById("produto-nome").textContent = produto.nome;
        document.getElementById("produto-preco").textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
    } else {
     
        document.getElementById("produto-detalhes").innerHTML = "<p>Nenhum produto selecionado.</p>";
    }
});

//Código para quando clicar no botão de finalizar compra, aparecer um alert com uma mensagem e uma data de viagem aleatória

document.addEventListener("DOMContentLoaded", function () {
    const finalizarCompraButton = document.getElementById("finalizar-compra");

    if (finalizarCompraButton) {
        finalizarCompraButton.addEventListener("click", function () {
            
            const diaAleatorio = Math.floor(Math.random() * 28) + 1;
            const mesAleatorio = Math.floor(Math.random() * 12) + 1; 
            const anoAleatorio = Math.floor(Math.random() * 5) + new Date().getFullYear(); 

           
            const dia = String(diaAleatorio).padStart(2, '0');
            const mes = String(mesAleatorio).padStart(2, '0');
            const dataFormatada = `${dia}/${mes}/${anoAleatorio}`;

            
            alert(`Compra finalizada! Data da viagem marcada para: ${dataFormatada}`);

            window.location.href = "../index.html";
        });
    }
});