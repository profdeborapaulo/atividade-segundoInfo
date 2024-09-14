// obtem os dados do localStorage e transforma em array
const sales = JSON.parse(localStorage.getItem('sales') || '[]').filter((sale) => sale.userId === user.id);
const products = JSON.parse(localStorage.getItem('products') || '[]').filter((product) => product.userId === user.id);
const salesContainer = document.getElementById('salesList');
const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]').filter((ingredient) => ingredient.userId === user.id);

const paymentMethods = {
    credit: 'Crédito',
    debit: 'Débito',
    money: 'Dinheiro',
    pix: 'Pix'
};

sales.map(sale => {

    const price = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        return parseFloat(product.price * productId.quantity);
    }).reduce((acc, curr) => acc + curr, 0);
    
    // calcula a quantidade de produtos vendidos
    const numberOfProducts = sale.products.map((productId) => parseInt(productId.quantity))
        .reduce((acc, curr) => acc + curr, 0);

    const element = 
    `<div data-saleId='${sale.id}' onclick='update(this)' class="sale">
        <p>${new Date(sale.createdAt).toLocaleString()}</p>
        <h3>R$ ${price.toFixed(2).replace('.', ',')}</h3>
        <p>${numberOfProducts} produtos</p>
        <p>Pagamento: ${paymentMethods[sale.paymentMethod]}</p>
    </div>`;

    salesContainer.innerHTML += element;
});

// mudar a venda nas infos
function update(element) {
    const saleDetails = document.getElementById('saleDetails');

    // obtem o valor do parametro data-saleId
    const saleId = element.getAttribute('data-saleId');
    const sale = sales.find((sale) => sale.id === saleId);

    const productsList = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        return `<li><img src="${product.photo}">${productId.quantity} x ${product.name} - R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}</li>`;
    }).join('');

    // calcula o lucro
    const ingredientsPrice = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        const ingredientsPrice = product.ingredients.map((productIngredient) => {
            const ingredient = ingredients.find((ingredient) => ingredient.id === productIngredient.id);
            return parseFloat(ingredient.price) * parseFloat(productIngredient.quantity);
        }).reduce((acc, curr) => acc + curr, 0);
        return (parseFloat(product.price) - ingredientsPrice) * productId.quantity;
    }).reduce((acc, curr) => acc + curr, 0);

    // calcula a receita
    const price = sale.products.map((productId) => {
        const product = products.find((product) => product.id === productId.id);
        return parseFloat(product.price * productId.quantity);
    }).reduce((acc, curr) => acc + curr, 0);

    saleDetails.innerHTML =
    `<h2>${new Date(sale.createdAt).toLocaleString()}</h2>
    <p>Produtos:</p>
    <ul>${productsList}</ul>
    <p>Lucro aproximado: R$ ${ingredientsPrice.toFixed(2).replace('.', ',')}</p>
    <p>Total: R$ ${price.toFixed(2).replace('.', ',')}</p>
    <p>Método de pagamento: ${paymentMethods[sale.paymentMethod]}</p>`;
}
