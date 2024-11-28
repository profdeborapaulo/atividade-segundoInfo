const params = new URLSearchParams(window.location.search); //Pega o parametro ID da URL

const ID = params.get('id'); //Atribui esse valor a uma variavel

    fetch('/dados') //Pega os dados do arquivo JSON
        .then(response => response.json())
        .then(data => {

                        if (Array.isArray(data)) { //verifica se retornou como um array
                data.forEach(produto => {
                    if (produto.name == ID) { //Passa por cada produto verificando se o nome e o ID coincidem, e se sim...
                        //Substitui o valor de cada placeholder
                        document.getElementById('title').innerHTML = produto.name;
                        document.getElementById('description').innerHTML = produto.description;
                        document.getElementById('price').innerHTML = "R$" + produto.price;
                        document.getElementById('image').src = produto.image;
                    }
                });

        }})
        .catch(error => console.error('Erro ao carregar os dados:', error));


function buyView(){
    let windowPopup = document.getElementById('buy-view');
    windowPopup.style = "display: show; opacity: 100%;";
}

//Mensagem de aviso se deu certo ou falhou
function buyClick(){
    const radioButtons = document.querySelectorAll('.radio-inputs input[type="radio"]');
    const todosDesmarcados = Array.from(radioButtons).every(radio => !radio.checked);
    let popup = document.getElementById('popup');

    if (todosDesmarcados) {
        document.getElementById('mensagem').innerHTML = "Selecione um método de pagamento";
        popup.style = "animation-name: fail; color: #d12424; -webkit-text-stroke: #d12424 1px;";
    } else {
        document.getElementById('mensagem').innerHTML = "Compra realizada com sucesso!";
        popup.style = "animation-name: success;";

        // Espera 2 segundos antes de redirecionar para página inicial
            setTimeout(() => {
                window.location.href = "/"; 
            }, 2000);
        }
}