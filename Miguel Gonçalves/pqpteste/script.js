// Array para armazenar os produtos
let products = JSON.parse(localStorage.getItem('products')) || [];
// Array para armazenar os itens do carrinho
let cart = JSON.parse(localStorage.getItem('cart')) || [];

/**
 * Adiciona um produto à lista de produtos
 * @param {string} name - Nome do produto
 * @param {number} price - Preço do produto
 */
function addProduct(name, price) {
    products.push({ name, price });
    // Salva a lista de produtos no localStorage
    localStorage.setItem('products', JSON.stringify(products));
}

/**
 * Adiciona um produto ao carrinho
 * @param {Object} product - Produto a ser adicionado ao carrinho
 */
function addToCart(product) {
    cart.push(product);
    // Salva o carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Remove um produto da lista de produtos
 * @param {number} index - Índice do produto a ser removido
 */
function removeProduct(index) {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    updateProductList();
}

/**
 * Remove um item do carrinho
 * @param {number} index - Índice do item a ser removido
 */
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartList();
}

/**
 * Atualiza a lista de produtos na página inicial
 */
function updateProductList() {
    const productList = document.getElementById('product-list');
    
    // Limpa a lista de produtos antes de atualizar
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - R$${product.price.toFixed(2)}`;
        
        const addButton = document.createElement('button');
        addButton.textContent = 'Adicionar ao Carrinho';
        addButton.onclick = () => {
            addToCart(product);
            alert('Produto adicionado ao carrinho!');
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => {
            removeProduct(index);
        };

        li.appendChild(addButton);
        li.appendChild(removeButton);
        productList.appendChild(li);
    });
}

/**
 * Atualiza a lista de itens no carrinho
 */
function updateCartList() {
    const cartList = document.getElementById('cart-list');
    let totalPrice = 0;

    // Limpa a lista do carrinho antes de atualizar
    cartList.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => {
            removeFromCart(index);
        };

        li.appendChild(removeButton);
        cartList.appendChild(li);
        totalPrice += item.price;
    });

    // Atualiza o total no carrinho
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Adiciona o listener para o formulário de adicionar produtos
document.getElementById('add-product-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    addProduct(name, price);
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    alert('Produto adicionado com sucesso!');
});

// Atualiza a lista de produtos na página inicial e o carrinho na página do carrinho
if (document.getElementById('product-list')) {
    updateProductList();
}
if (document.getElementById('cart-list')) {
    updateCartList();
}
