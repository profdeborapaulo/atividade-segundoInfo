
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

//Código para definir preço do produto e o nome e redirecionar para a página de compra

 
 function selecionarProduto(nomeProduto, precoProduto) {
    const produto = {
        nome: nomeProduto,
        preco: precoProduto,
    };

   
    localStorage.setItem("produtoSelecionado", JSON.stringify(produto));

    
    window.location.href = "Compra.html";
}

