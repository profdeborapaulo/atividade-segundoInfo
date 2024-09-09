document.getElementById("enviar").addEventListener("click", function() {
    alert("Mensagem enviada com sucesso!");
document.getElementById("nome").value = '';
document.getElementById("email").value = '';
document.getElementById("mensagem").value = '';
});

//carregar os produtos do localStorage ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    loadProducts(); // Carregar produtos existentes do localStorage
});

//adicionar o produto na DOM
function addProductToDOM(product) {
    const productList = document.getElementById('productList');

    // Cria o elemento HTML pro produto
    const productElement = document.createElement('div');
    productElement.className = 'col-md-4 mb-4';
    productElement.innerHTML = `
        <div class="card product-card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title"><strong>R$${product.price}</strong></h5>
            <p class="card-text">${product.description}</p>
            <a class="btn btn-primary">Comprar</a>
          </div>
        </div>
    `;

    // coloca o novo produto na lista 
    productList.appendChild(productElement);
}

// salva o produto no localStorage
function saveProduct(product) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

// carrega os produtos do localStorage pra adicionar no DOM
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(addProductToDOM);
}

//submit do formulário para adicionar um novo produto
document.getElementById('productForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário (pra evitar erro)

    // pega os dados do formulário
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const image = document.getElementById('productImage').value;

    // Cria um objeto pro produto
    const product = { name, description, price, image };

    // coloca produto à página e salva no localStorage
    addProductToDOM(product);
    saveProduct(product);

    // Limpa o forms
    document.getElementById('productForm').reset();
});
