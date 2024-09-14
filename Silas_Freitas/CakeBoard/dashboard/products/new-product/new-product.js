function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 16; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

const form = document.getElementById('form');

// obtem os dados do localStorage e transforma em array
const products = JSON.parse(localStorage.getItem('products') || '[]');
const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]').filter((ingredient) => ingredient.userId === user.id);
const categories = JSON.parse(localStorage.getItem('categories') || '[]').filter((category) => category.userId === user.id);

// renderiza os ingredientes
ingredients.map(ingredient => {
    const element = 
    `<option value='${ingredient.id}'>${ingredient.name}</option>`;

    const container = document.getElementById('ingredient');
    container.innerHTML += element;
});

// renderiza as categorias
categories.map(category => {
    const element = 
    `<option value='${category.id}'>${category.name}</option>`;

    const container = document.getElementById('category');
    container.innerHTML += element;
})

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { name, price, photo, category } = form;

    const ingredientsId = Array.from(document.getElementsByClassName('ingredients')).map((ingredient) => ingredient.value);
    const ingredients = ingredientsId.map((ingredientId) => {
        const quantity = document.getElementById(`quantity-${ingredientId}`).value;
        return { id: ingredientId, quantity };
    });

    if (name.value.length < 2) {
        alert('O nome do produto deve ter mais que 2 caracteres');
        return;
    }

    if (price.value === 0) {
        alert('O preço do produto não pode ser igual a zero');
        return;
    }

    if (ingredients.length === 0) {
        alert('O produto deve haver pelo menos 1 ingrediente');
        return;
    }

    if (products.find((product) => product.name === name && product.userId === user.id)) {
        alert('Já existe um produto com este nome!');
        return;
    }

    const product = {
        id: generateRandomId(),
        name: name.value,
        price: price.value,
        photo: photo.value,
        categoryId: category.value,
        ingredients,
        userId: user.id
    }

    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));

    alert('Produto cadastrado com sucesso!');
    window.location.href = "../"
});

// função para adicionar ingrediente ao produto
function addIngredient() {
    const ingredientId = document.getElementById('ingredient').value;
    const ingredientsContainer = document.getElementById('selectedIngredients');
    const ingredient = ingredients.find((ingredient) => ingredient.id === ingredientId);

    const element = 
    `<div>
        <img src='${ingredient.photo}' alt='${ingredient.name}' />
        <p>${ingredient.name}</p>
        <p>R$ ${parseFloat(ingredient.price).toFixed(2).replace('.', ',')}</p>
        <input type='hidden' class='ingredients' value='${ingredient.id}' />
        <label for='quantity-${ingredient.id}'>
            Quantidade:
            <input type='number' id='quantity-${ingredient.id}' value='1' />
        </label>
    </div>`;

    ingredientsContainer.innerHTML += element;

    document.getElementById('ingredient').value = '';

    // remove o ingrediente do select
    Array.from(document.getElementById('ingredient').children).find(option => option.value === ingredientId).remove();
}