// Seleciona o container onde os cartões de carros serão adicionados
const carsContainer = document.querySelector('.car-cards-container');

// Obtém o ID da categoria a partir da URL
const id = new URLSearchParams(window.location.search).get('id');

// Encontra a categoria correspondente ao ID
const category = categories.find(category => category.id == id);

// Atualiza os elementos que possuem a classe "category-name" com o nome da categoria
document.querySelectorAll('.category-name').forEach(element => {
    element.innerText += ' ' + category.name; // Adiciona o nome da categoria ao texto
});

// Filtra os carros que pertencem à categoria atual e os renderiza
cars.filter(car => car.categoryId == id).map(car => {
    let color = car.colors[0]; // Define a primeira cor como padrão

    // Cria um elemento <figure> para representar o cartão do carro
    const carElement = document.createElement('figure');
    carElement.classList.add('car-card'); // Adiciona uma classe para estilização

    // Renderiza o conteúdo do cartão do carro
    renderCar(car, color, car.colors, carElement);

    // Marca a cor inicial como ativa
    carElement.querySelectorAll('.car-card-color')[0].classList.add('color-active');

    // Adiciona eventos de clique para mudar a cor do carro
    carElement.querySelectorAll('.car-card-color').forEach(colorElement => {
        colorElement.addEventListener('click', () => {
            // Remove a classe "color-active" de todas as cores
            carElement.querySelectorAll('.car-card-color').forEach(colorElement => {
                colorElement.classList.remove('color-active');
            });

            // Adiciona a classe "color-active" à cor clicada
            colorElement.classList.add('color-active');

            // Atualiza a cor do carro e a imagem com base na seleção
            const newColor = car.colors.find(c => c.hex === colorElement.dataset.color);
            color = newColor; // Atualiza a variável `color`
            carElement.querySelector('.car-card-image').src = newColor.image; // Atualiza a imagem
        });
    });

    // Adiciona o cartão do carro ao container principal
    carsContainer.appendChild(carElement);
});

// Função para renderizar o conteúdo HTML de um cartão de carro
function renderCar(car, color, colors, parent) {
    parent.innerHTML = `
        <figcaption class="car-card-image-container">
            <!-- Imagem do carro na cor selecionada -->
            <img src="${color.image}" alt="${car.name} - ${color.name}" class="car-card-image">
        </figcaption>
        <figcaption class="car-card-info-container">
            <!-- Nome do carro -->
            <h2 class="car-card-title">${car.name}</h2>
            <!-- Nome da categoria -->
            <span class="car-card-category">${categories.find(category => category.id === car.categoryId).name}</span>
            <!-- Descrição do carro -->
            <p class="car-card-description">${car.description}</p>
            <!-- Preço formatado -->
            <span class="car-card-price">BTC ${car.price.toFixed(2).replace('.', ',')}</span>
            <!-- Seletor de cores -->
            <div class="car-card-colors">
                <p>Cores: </p>
                ${colors.map(color => `
                    <button class="car-card-color" title="${color.name}" style="background-color: ${color.hex};" data-color="${color.hex}"></button>
                `).join('')} <!-- Gera os botões de seleção de cor -->
            </div>
        </figcaption>
    `;
}
