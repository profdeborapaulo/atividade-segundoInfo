const categoriesContainer = document.getElementById('categoriesList');
const categoryDetails = document.getElementById('categoryDetails');

// obtem os dados do localStorage e transforma em array
const categories = JSON.parse(localStorage.getItem('categories') || '[]').filter((category) => category.userId === user.id);
const products = JSON.parse(localStorage.getItem('products') || '[]').filter((product) => product.userId === user.id);

// renderiza as categorias
categories.map(category => {
    const categoryProducts = products.filter(product => product.categoryId === category.id)
    const element = 
    `<div data-categoryId='${category.id}' onclick='update(this)' class="category">
        <h3>${category.name}</h3>
        <p>${categoryProducts.length} Produtos</p>
    </div>`;

    categoriesContainer.innerHTML += element;
});

// muda a categoria nas infos
function update(element) {
    const categoryId = element.dataset.categoryid;
    const category = categories.find((category) => category.id === categoryId);
    const categoryProducts = products.filter((product) => product.categoryId === category.id);

    const productsList = categoryProducts.map((product) => {
        return `<li class="product"><img src="${product.photo}" class="product-photo">${product.name}</li>`;
    }).join('');

    const categoryElement = 
    `<div>
        <h3>${category.name}</h3>
        <p>Produtos:</p>
        <ul>${productsList}</ul>
    </div>`;
    categoryDetails.innerHTML = categoryElement;
}