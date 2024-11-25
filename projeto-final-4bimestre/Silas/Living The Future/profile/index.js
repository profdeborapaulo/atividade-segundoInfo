// Seleciona o container onde o perfil será renderizado
const profileContainer = document.querySelector('.profile-container');
let page = "profile"; // Define a página inicial como "profile"

// Renderiza a estrutura inicial do perfil com navegação e área de conteúdo
profileContainer.innerHTML = `
    <article class="profile-nav">
        <h2>Meu Perfil</h2>
        <a href="#" data-nav="profile">Perfil</a>
        <a href="#" data-nav="orders">Pedidos</a>
        <a href="#" data-nav="edit-profile">Editar Perfil</a>
    </article>
    <article class="profile-content">
    </article>
`;

// Seleciona todos os links de navegação do perfil
const navs = document.querySelectorAll('.profile-nav a');

// Adiciona eventos de clique para cada link de navegação
navs.forEach(nav => {
    nav.addEventListener('click', event => {
        event.preventDefault(); // Previne o comportamento padrão do link
        page = event.target.dataset.nav; // Atualiza a página atual com base no atributo `data-nav`
        renderPage(); // Chama a função para renderizar a nova página
    });
});

// Função principal para renderizar o conteúdo da página atual
function renderPage() {
    const content = document.querySelector('.profile-content'); // Seleciona a área de conteúdo
    content.innerHTML = ''; // Limpa o conteúdo existente
    switch (page) {
        case 'profile': // Caso seja a página "Perfil"
            renderProfile(content);
            break;
        case 'orders': // Caso seja a página "Pedidos"
            renderOrders(content);
            break;
        case 'edit-profile': // Caso seja a página "Editar Perfil"
            renderEditProfile(content);
            break;
    }
}

// Renderiza a página inicial
renderPage();

// Função para renderizar o perfil do usuário
function renderProfile(content) {
    const user = users.find(user => user.id == localStorage.getItem('userId')); // Encontra o usuário logado
    content.innerHTML = `
        <h2>Perfil</h2>
        <p><strong>Nome:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>CPF:</strong> ${user.cpf}</p>
    `;
}

// Função para renderizar os pedidos do usuário
function renderOrders(content) {
    const user = users.find(user => user.id == localStorage.getItem('userId')); // Encontra o usuário logado
    const userOrders = orders.filter(order => order.userId == user.id); // Filtra os pedidos do usuário
    content.innerHTML = `
        <h2>Pedidos</h2>
        <ul class="order-container">
            ${userOrders.map(order => { // Mapeia os pedidos do usuário para gerar a lista
                const car = cars.find(car => car.id == order.carId); // Encontra o carro do pedido
                const color = car.colors.find(color => color.name == order.color); // Encontra a cor do carro
                return `
                <li class="order-card">
                    <img src="${color.image}" alt=""> <!-- Mostra a imagem do carro -->
                    <figure class="order-info">
                        <h4>${car.name}</h4> <!-- Nome do carro -->
                        <p><strong>Cor:</strong> ${order.color}</p> <!-- Cor do carro -->
                        <p><strong>Preço:</strong> BTC ${order.price.toFixed(2).replace('.', ',')}</p> <!-- Preço -->
                    </figure>
                </li>
                `;
            }).join('')} <!-- Junta todos os elementos da lista -->
        </ul>
    `;
}

// Função para renderizar o formulário de edição de perfil
function renderEditProfile(content) {
    const user = users.find(user => user.id == localStorage.getItem('userId')); // Encontra o usuário logado
    content.innerHTML = `
        <h2>Editar Perfil</h2>
        <form data-form="edit-profile">
            <label>Nome</label>
            <input type="text" name="name" value="${user.name}" required>
            <label>Email</label>
            <input type="email" name="email" value="${user.email}" required>
            <label>CPF</label>
            <input type="text" name="cpf" value="${user.cpf}" required>
            <button type="submit">Salvar</button>
        </form>
    `;

    // Adiciona máscara no campo CPF ao digitar
    const cpfInput = document.querySelector('input[name="cpf"]');
    cpfInput.addEventListener('input', () => {
        cpfInput.value = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        cpfInput.value = cpfInput.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Aplica a máscara de CPF
    });

    // Adiciona evento para salvar o formulário
    document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault(); // Previne o envio padrão do formulário
        const name = event.target.name.value; // Obtém o nome do formulário
        const email = event.target.email.value; // Obtém o email
        const cpf = event.target.cpf.value; // Obtém o CPF
        const userIndex = users.findIndex(user => user.id == localStorage.getItem('userId')); // Encontra o índice do usuário
        // Atualiza os dados do usuário
        users[userIndex] = { ...users[userIndex], name, email, cpf };
        localStorage.setItem('users', JSON.stringify(users)); // Salva os dados atualizados no localStorage
        renderProfile(document.querySelector('.profile-content')); // Renderiza novamente o perfil
    });
}
