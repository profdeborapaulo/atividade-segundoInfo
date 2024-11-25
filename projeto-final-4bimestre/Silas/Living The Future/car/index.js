// Seleciona o container onde os detalhes do carro serão exibidos
const carContainer = document.querySelector('.car-container');

// Obtém a cor e o ID do carro a partir da URL
const color = new URLSearchParams(window.location.search).get('color');
const id = new URLSearchParams(window.location.search).get('id');

// Encontra o carro correspondente ao ID fornecido
const car = cars.find(car => car.id == id);

// Encontra a cor específica do carro selecionada na URL
let carColor = car.colors.find(c => c.hex === color);

// Redireciona para a página inicial caso o carro não seja encontrado
if (!car) {
    window.location.href = '/';
}

// Insere o conteúdo HTML para exibir as informações do carro
carContainer.innerHTML = `
    <!-- Seção da imagem do carro -->
    <article class="car-card-image-container">
        <img src="${carColor.image}" alt="${car.name} - ${carColor.name}" class="car-card-image">
    </article>

    <!-- Seção das informações do carro -->
    <article class="car-card-info-container">
        <h2 class="car-card-title">${car.name}</h2>
        <!-- Categoria do carro -->
        <span class="car-card-category">${categories.find(category => category.id === car.categoryId).name}</span>
        <!-- Descrição do carro -->
        <p class="car-card-description">${car.description}</p>
        <!-- Preço do carro -->
        <span class="car-card-price">BTC ${car.price.toFixed(2).replace('.', ',')}</span>
        <!-- Opções de cores -->
        <div class="car-card-colors">
            <p>Cores: </p> 
            ${car.colors.map(color => `
                <!-- Botões de seleção de cor -->
                <a class="car-card-color ${color.hex === carColor.hex ? "color-active" : ""}" data-color="${color.hex}" title="${color.name}" style="background-color: ${color.hex};"></a>
            `).join('')}
        </div>
        <!-- Botão de compra, condicionado ao estado de login -->
        ${user ? `
            <button class="car-card-buy">Comprar</button>
        ` : `
            <button class="car-card-buy" disabled>Comprar</button>
            <span class="car-card-login">Faça <a href="/auth">login</a> para comprar</span>
        `}
    </article>
`;

// Adiciona eventos aos botões de seleção de cor
document.querySelectorAll('.car-card-color').forEach(colorElement => {
    colorElement.addEventListener('click', () => {
        // Encontra a nova cor selecionada
        const newColor = car.colors.find(c => c.hex === colorElement.dataset.color);
        // Atualiza a imagem do carro para a nova cor
        carContainer.querySelector('.car-card-image').src = newColor.image;
        // Remove a classe "color-active" de todas as cores
        document.querySelectorAll('.car-card-color').forEach(colorElement => {
            colorElement.classList.remove('color-active');
        });
        // Adiciona a classe "color-active" à nova cor selecionada
        colorElement.classList.add('color-active');
        // Atualiza a cor selecionada na variável `carColor`
        carColor = newColor;
    });
});

// Adiciona evento ao botão de compra
document.querySelector('.car-card-buy').addEventListener('click', () => {
    // Cria um objeto de pedido com os detalhes do usuário, carro e preço
    const order = {
        userId: user.id, // ID do usuário
        carId: car.id,   // ID do carro
        color: carColor.name, // Nome da cor selecionada
        price: car.price // Preço do carro
    };
    // Adiciona o pedido à lista de pedidos e salva no armazenamento local
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    // Exibe uma mensagem de confirmação
    alert('Pedido realizado com sucesso');
});
