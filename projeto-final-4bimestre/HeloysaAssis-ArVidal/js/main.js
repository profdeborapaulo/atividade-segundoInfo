const navLinks = document.querySelectorAll(".nav-menu .nav-link") //Seleciona todos os links dentro da classe
const menuOpenButton = document.querySelector("#menu-open-button"); //Seleciona o botão de abrir
const menuCloseButton = document.querySelector("#menu-close-button"); //Seleciona o botão de fechar

//Adiciona evento de clique no botao de abrir
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu"); //Alterna a classe 'show-mobile-menu' no body
})

//Adiciona evento de clique ao botão de fechar menu
menuCloseButton.addEventListener("click", () => menuOpenButton.click()); 

// Adiciona um evento de clique a cada link de navegação para fechar o menu ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
});


// Seleciona elementos relacionados ao carrinho
const openShopping = document.querySelector(".shopping"); 
const closeShopping = document.querySelector(".closeShopping"); 
const list = document.querySelector(".products-list"); 
const listCard = document.querySelector(".listCard"); 
const total = document.querySelector(".total"); 
const body = document.querySelector("body");
const quantity = document.querySelector(".bag-quantity"); 

// Ao clicar no ícone de "abrir carrinho", adiciona a classe 'active' no body, exibindo o carrinho
openShopping.addEventListener("click", () => {
    body.classList.add("active"); 
});
// Ao clicar no ícone de "fechar carrinho", remove a classe 'active' do body, escondendo o carrinho
closeShopping.addEventListener("click", () => {
    body.classList.remove("active"); 
});


//Definindo lista de produtos
let products = [
    { 
        id: 1,
        name: "Ar do Campo",
        images: "img/field-air-bg-image.png",
        price: 450
    },

    { 
        id: 2,
        name: "Ar da Floresta", 
        images: "img/forest-air-bg-image.png", 
        price: 450
    },

    { 
        id: 3, 
        name: "Ar da Neve", 
        images: "img/snowy-air-bg-image.png", 
        price: 450
    },

    { 
        id: 4, 
        name: "Ar da Primavera", 
        images: "img/spring-air-bg-image.png", 
        price: 450 
    },

    { 
        id: 5, 
        name: "Ar Tropical", 
        images: "img/tropical-air-bg-image.png", 
        price: 450 
    },

    { 
        id: 6,
        name: "Ar Tradicional",
        images: "img/tradicional-air-bg-image.png",
        price: 450
    },
];

let listCards = []; //Array para armazenar os produtos


//Função para exibir produtos na tela
const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div"); //Cria uma div para cada produto
        newDiv.classList.add("item"); //Adiciona classe a div

        //Exibe imagem, produto e preço respectivamente e botão para adicionar carrinho
        newDiv.innerHTML = `
            <img src="${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">R$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Adicionar ao carrinho</button>
        `;
        list.appendChild(newDiv); //Adiciona novo produto na pagina 
    });
};

initApp(); //Chama função

//Função que adiciona o produto ao carrinho
const addToCard = (key) => {
    if (listCards[key] == null) { //Verifica se o produto ja foi adicionado
        listCards[key] = JSON.parse(JSON.stringify(products[key])); //Cria uma cópia do produto e o adiciona ao carrinho
        listCards[key].quantity = 1;//Define a quantidade inicial do produto como 1
    }
    reloadCard(); //Atualiza o carrinho
};

//Função que recarrega o conteúdo do carrinho
const reloadCard = () => {
    listCard.innerHTML = ""; //Limpa conteudo do carrinho
    let count = 0; //Contador de itens
    let totalPrice = 0; //Preço total

    listCards.forEach((value, key) => {
        if (value != null) { // Verifica se o produto existe
            totalPrice += value.price * value.quantity;  //Calcula o preço total do produto
            count += value.quantity; // Soma a quantidade de produtos

            let newDiv = document.createElement("li"); //Cria um novo elemento de lista para o item
            //Exibe imagem, produto e preço respectivamente alem do botao de diminuir e aumentar quantidade
            newDiv.innerHTML = `
                <div><img src="${value.images}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">R$${(value.price * value.quantity).toLocaleString()}</div>
                <div> 
                    <button style="background-color: #01a6e8" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})"> - </button>
                    <div class="count">${value.quantity}</div>
                    <button style="background-color: #01a6e8" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})"> + </button>
                </div>
            `;
            listCard.appendChild(newDiv); //Adiciona item no carrinho
        }
    });

    total.innerText = totalPrice.toLocaleString(); //Exibe preço total
    quantity.innerText = count; //Exibe numero de itens
};


//Função para alterar a quantidade de itens
const changeQuantity = (key, quantity) => {
    if (quantity == 0) {
        delete listCards[key]; //Se a quantidade for 0 remove o item do carrinho
    } else {
        listCards[key].quantity = quantity; //Caso contrário atualiza a quantidade do item
    }
    reloadCard(); //Atualiza o carrinho
};
