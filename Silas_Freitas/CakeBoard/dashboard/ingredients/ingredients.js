const ingredientsContainer = document.getElementById('ingredientsList');
const ingredientDetails = document.getElementById('ingredientDetails');

// obtem os dados do localStorage e transforma em array
const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]').filter((ingredient) => ingredient.userId === user.id);
const products = JSON.parse(localStorage.getItem('products') || '[]').filter((product) => product.userId === user.id);

// renderiza os ingredientes
ingredients.map(ingredient => {
    const element = 
    `<div data-ingredientId='${ingredient.id}' onclick='update(this)' class="ingredient">
        <img src='${ingredient.photo}' alt='${ingredient.name}' />
        <h3>${ingredient.name}</h3>
        <p>R$ ${parseFloat(ingredient.price).toFixed(2).replace('.', ',')}</p>
    </div>`;

    ingredientsContainer.innerHTML += element;
});

// muda o ingrediente nas infos
function update(element) {
    const ingredientId = element.dataset.ingredientid;
    const ingredient = ingredients.find((ingredient) => ingredient.id === ingredientId);

    const productsList = products.filter((product) => product.ingredients.find((productIngredient) => productIngredient.id === ingredientId));

    const productsElements = productsList.map((product) => {
        return `<li><img src="${product.photo}">${product.name}</li>`;
    }).join('');

    const ingredientElement = 
    `<div>
        <img src='${ingredient.photo}' alt='${ingredient.name}' />
        <h3>${ingredient.name}</h3>
        <p>Preço: R$ ${parseFloat(ingredient.price).toFixed(2).replace('.', ',')}</p>
        <p>Produtos:</p>
        <ul>${productsElements}</ul>
    </div>`;

    ingredientDetails.innerHTML = ingredientElement;

    
}