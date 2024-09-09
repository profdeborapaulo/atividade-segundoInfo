const products = JSON.parse(localStorage.getItem('products') || '[]').filter((product) => product.userId === user.id);
const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]').filter((ingredient) => ingredient.userId === user.id);
const categories = JSON.parse(localStorage.getItem('categories') || '[]').filter((category) => category.userId === user.id);
const sales = JSON.parse(localStorage.getItem('sales') || '[]').filter((sale) => sale.userId === user.id);

const productsContainer = document.getElementById('productsList');
const productDetails = document.getElementById('productDetails');

products.map(product => {
    const element = 
    `<div data-productId='${product.id}' onclick='update(this)' class='product'>
        <img src='${product.photo}' alt='${product.name}' />
        <h3>${product.name}</h3>
        <p>R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}</p>
    </div>`;

    productsContainer.innerHTML += element;
});

function update(element) {
    const productId = element.dataset.productid;
    const product = products.find((product) => product.id === productId);

    const ingredientsList = product.ingredients.map((productIngredient) => {
        const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
        return `<li><img src="${ingredient.photo}">${ingredient.name} - ${productIngredient.quantity}</li>`;
    }).join('');

    const ingredientsPrice = product.ingredients.map((productIngredient) => {
        const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
        return parseFloat(ingredient.price) * parseFloat(productIngredient.quantity);
    }).reduce((acc, curr) => acc + curr, 0);

    const category = categories.find((category) => category.id === product.categoryId);

    const productSales = sales.map((sale) => {
        const saleProduct = sale.products.find((saleProduct) => saleProduct.id === productId);
        if (saleProduct) {
            return parseInt(saleProduct.quantity);
        } else {
            return 0;
        }
    }).reduce((acc, curr) => acc + curr, 0);

    const productElement = 
    `<div>
        <img src='${product.photo}' alt='${product.name}' />
        <h3>${product.name}</h3>
        <p>Preço: R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}</p>
        <p>Lucro aprox. por unidade: R$ ${(parseFloat(product.price) - ingredientsPrice).toFixed(2).replace('.', ',')}</p>
        <p>Categoria: ${category.name}</p>
        <p>Ingredientes:</p>
        <ul>${ingredientsList}</ul>
        <p>Vendas: ${productSales}</p>
    </div>`;

    productDetails.innerHTML = productElement;
}