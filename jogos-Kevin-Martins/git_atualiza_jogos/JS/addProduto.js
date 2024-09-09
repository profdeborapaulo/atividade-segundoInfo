document.addEventListener("DOMContentLoaded", function() {
    const botaodesalvar = document.getElementById("salvar");
    const prodcont = document.getElementById("produtos-container");

    // Função para adicionar um produto
    function adicionarProd() {
        console.log('Função adicionarProd chamada');

        const nome = document.getElementById("nome-jogo").value;
        const sinopse = document.getElementById("sinopse").value;     // busca as informações do item no form
        const valor = parseFloat(document.getElementById("valor-produto").value).toFixed(2);

        const fotoInput = document.getElementById("foto");
        const file = fotoInput.files[0];    // busca a imagem no form
        const reader = new FileReader();

        reader.onloadend = function() {
            const produto = {
                imagem: reader.result,
                titulo: nome,        //coloca os valores das informações na const
                preco: `R$${valor}`,
                sinopse: sinopse
            };

            // Adiciona o produto ao localStorage
            let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
            produtos.push(produto);
            localStorage.setItem('produtos', JSON.stringify(produtos));

            console.log('Produto adicionado. Redirecionando para inicial.html'); 
            // Redireciona para a página inicial
            window.location.href = "inicial.html";
        };

        if (file) {
            reader.readAsDataURL(file); // Transforma a imagem em uma URL
        } else {
            alert("Por favor selecione uma imagem");
        }
    }

    // Função para exibir os produtos
    function exibirJogos() {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

        produtos.forEach(produto => {
            const produtoElementos = document.createElement("div");
            produtoElementos.classList.add("card");

            //Cria o card com os elementos buscados no forms pelas suas variaveis atribuidas
            produtoElementos.innerHTML = `
                <div class="img" style="background-image: url(${produto.imagem});"></div>
                <div class="conteudo-card">
                    <span class="titulo">${produto.titulo}</span>
                    <p class="descricao-card">${produto.sinopse}</p>  
                </div>
                <div class="butao">
                    <span><a class="preco">${produto.preco}</a><a class="button">Adicionar ao carrinho</a></span>
                </div>
            `;

            prodcont.appendChild(produtoElementos);
        });
    }

    // Verifica a URL para adicionar ou exibir um novo item
    if (window.location.pathname.includes("novoProduto.html")) {
        if (botaodesalvar) {
            console.log('Evento click adicionado ao botão salvar'); // Depuração
            botaodesalvar.addEventListener("click", adicionarProd);
        }
    } else if (window.location.pathname.includes("inicial.html")) {
        exibirJogos();
    }
});
