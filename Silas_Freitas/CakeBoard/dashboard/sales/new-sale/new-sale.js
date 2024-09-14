function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 16; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

// obtem os dados do localStorage e transforma em array
const products = JSON.parse(localStorage.getItem('products') || '[]').filter((product) => product.userId === user.id);
const sales = JSON.parse(localStorage.getItem('sales') || '[]');
const productsList = document.getElementById('product');

const form = document.getElementById('form');

// renderiza os produtos disponiveis no option
products.map(product => {
    const element = 
    `<option value='${product.id}'>${product.name} - R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}</option>`;

    productsList.innerHTML += element;
});

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const { cpf, paymentMethod } = form;

    const productsId = document.getElementsByClassName('products');

    const products = Array.from(productsId).map((product) => {
        const quantity = document.getElementById(`quantity-${product.value}`).value;
        return { id: product.value, quantity };
    });

    if (products.length === 0) {
        alert('A venda deve haver pelo menos 1 produto');
        return;
    }

    const sale = {
        id: generateRandomId(),
        products,
        cpf: cpf.value || null,
        paymentMethod: paymentMethod.value,
        userId: user.id,
        createdAt: new Date()
    }

    sales.push(sale);

    // transforma em json e guarda no localStorage
    localStorage.setItem('sales', JSON.stringify(sales));

    alert('Venda cadastrada com sucesso!');
    window.location.href = "../";
});

// função para adicionar o produto a venda
function addProduct() {
    const productId = document.getElementById('product');
    const productsContainer = document.getElementById('selectedProducts');
    const product = products.find((product) => product.id === productId.value);

    const element = 
    `<div>
        <img src='${product.photo}' alt='${product.name}' />
        <p>${product.name} - R$ ${parseFloat(product.price).toFixed(2).replace('.', ',')}</p>
        <input type='hidden' class='products' value='${product.id}' />
        <label for='quantity'>
            Quantidade:
            <input type='number' id='quantity-${product.id}' value='1' />
        </label>
    </div>`;

    const quantities = {}
    
    // guarda os values para quando resetar
    Array.from(productsContainer.querySelectorAll('input[type="number"]')).map((product) => quantities[product.id] = product.value);

    // renderiza a div
    productsContainer.innerHTML += element;

    // obtem os values salvos
    Array.from(productsContainer.querySelectorAll('input[type="number"]')).map((product) => product.value = quantities[product.id] || product.value);

    productId.value = '';
    
    // remove o produto adicionado do select
    Array.from(productId.children).find((option) => option.value === product.id).remove();
}