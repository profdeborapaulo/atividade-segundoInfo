// Seleciona o container onde os cartões de carros serão adicionados
const carsContainer = document.querySelector('.car-cards-container');

// Itera sobre a lista de carros para criar e renderizar cada cartão
cars.map(car => {
    let color = car.colors[0]; // Seleciona a primeira cor disponível do carro como padrão

    // Cria um elemento de link (<a>) para o cartão do carro
    const carElement = document.createElement('a');
    carElement.classList.add('car-card'); // Adiciona a classe para estilização
    carElement.id = car.id; // Define o ID do carro como ID do elemento
    // Configura o link para incluir o ID e a cor inicial do carro
    carElement.href = `/car/?id=${car.id}&color=${color.hex.replace('#', '%23')}`;

    // Renderiza o conteúdo do cartão de carro no elemento criado
    renderCar(car, color, car.colors, carElement);

    // Marca a cor inicial como ativa
    carElement.querySelectorAll('.car-card-color')[0].classList.add('color-active');

    // Adiciona eventos de clique para alterar a cor do carro no cartão
    carElement.querySelectorAll('.car-card-color').forEach(colorElement => {
        colorElement.addEventListener('click', (ev) => {
            ev.preventDefault(); // Previne o comportamento padrão do link

            // Remove a classe "color-active" de todas as cores
            carElement.querySelectorAll('.car-card-color').forEach(colorElement => {
                colorElement.classList.remove('color-active');
            });

            // Adiciona a classe "color-active" na cor selecionada
            colorElement.classList.add('color-active');

            // Encontra a nova cor baseada no atributo `data-color`
            const newColor = car.colors.find(c => c.hex === colorElement.dataset.color);
            color = newColor; // Atualiza a variável `color` com a nova cor

            // Atualiza o link para refletir a nova cor
            carElement.href = `/car/?id=${car.id}&color=${color.hex.replace('#', '%23')}`;

            // Atualiza a imagem do carro para corresponder à nova cor
            carElement.querySelector('.car-card-image').src = newColor.image;
        });
    });

    // Adiciona o cartão do carro ao container principal
    carsContainer.appendChild(carElement);
});

// Função responsável por renderizar o conteúdo HTML de um cartão de carro
function renderCar(car, color, colors, parent) {
    parent.innerHTML = `
        <figcaption class="car-card-image-container">
            <!-- Imagem do carro na cor selecionada -->
            <img src="${color.image}" alt="${car.name} - ${color.name}" class="car-card-image">
        </figcaption>
        <figcaption class="car-card-info-container">
            <!-- Nome do carro -->
            <h2 class="car-card-title">${car.name}</h2>
            <!-- Categoria do carro -->
            <span class="car-card-category">${categories.find(category => category.id === car.categoryId).name}</span>
            <!-- Descrição do carro -->
            <p class="car-card-description">${car.description}</p>
            <!-- Preço do carro formatado -->
            <span class="car-card-price">BTC ${car.price.toFixed(2).replace('.', ',')}</span>
            <!-- Seletor de cores -->
            <div class="car-card-colors">
                <p>Cores: </p> 
                ${colors.map(color => `
                    <a class="car-card-color" href="#" title="${color.name}" style="background-color: ${color.hex};" data-color="${color.hex}"></a>
                `).join('')}
            </div>
        </figcaption>
    `;
}

// Seleciona o container onde os cartões de categorias serão adicionados
const categoriesContainer = document.querySelector('.category-cards-container');

// Itera sobre a lista de categorias para criar e renderizar cada cartão de categoria
categories.map(category => {
    // Cria um elemento de link (<a>) para o cartão de categoria
    const categoryElement = document.createElement('a');
    categoryElement.classList.add('category-card'); // Adiciona a classe para estilização
    categoryElement.href = `/category/?id=${category.id}`; // Configura o link com o ID da categoria

    // Adiciona o título da categoria ao elemento
    categoryElement.innerHTML = `
        <h2 class="category-card-title">${category.name}</h2>
    `;

    // Adiciona o cartão de categoria ao container principal
    categoriesContainer.appendChild(categoryElement);
});
