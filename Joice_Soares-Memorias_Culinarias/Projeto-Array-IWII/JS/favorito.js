console.log('Favoritos armazenados:', JSON.parse(localStorage.getItem('favoritos')));

// FUNÇÃO MOSTRAR DETALHE RECEITA
function mostrarDetalhe(element) {

    // encontra o elemento 'card'
    const card = element.closest('.card');
    const receitaId = card.getAttribute('data-id'); // obtém o ID da receita do atributo data-id

    // redireciona para a página de detalhes da receita correspondente
    window.location.href = `../HTML/detalhe.html?id=${receitaId}`;
}

// FUNÇÃO FAVORITAR
function toggleFavorite(element) {
    const card = element.closest('.card');
    const idNome = card.getAttribute('data-id');

    // adiciona a class "favorited" ao elemento
    element.classList.toggle('favorited');

    // obtém a lista atual de favoritos do localStorage
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // verifica se o elemento tem a class "favorited"
    if (element.classList.contains('favorited')) {
        // adiciona o ID à lista de favoritos se não estiver presente
        if (!favoritos.includes(idNome)) {
            favoritos.push(idNome);
        }
    } else {
        // remove o ID da lista de favoritos se estiver presente
        favoritos = favoritos.filter(favId => favId !== idNome);
    }
    // salva a lista atualizada de favoritos no localStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// FUNÇÃO VERIFICAR ESTADO CORAÇÃO
function updateHeartIcons() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // encontra todos os ícones de coração na página
    const hearts = document.querySelectorAll('.heart');

    hearts.forEach(heart => {
        const card = heart.closest('.card');
        const id = card.getAttribute('data-id');

        if (favoritos.includes(id)) {
            heart.classList.add('favorited');
        } else {
            heart.classList.remove('favorited');
        }
    });
}

// atualiza o estado dos corações ao carregar a página
document.addEventListener('DOMContentLoaded', updateHeartIcons);

document.addEventListener('DOMContentLoaded', async function () {
    // carrega o arquivo receitas.json
    const msg = document.getElementById('msg');
    const response = await fetch('../JS/receitas.json');
    const data = await response.json();

    //pega a lista de IDs de favoritos do localStorage
    let favoritos = JSON.parse(localStorage.getItem('favoritos'));

    favoritos = favoritos.filter(id => id !== null && id.trim() !== '');
    console.log(favoritos);

    // pega o container onde os cards serão adicionados
    const container = document.querySelector('.receitas');

    // FUNÇÃO PARA CRIAR UM CARD A PARTIR DOS DADOS DA RECEITA
    function createCard(receita) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', receita.id);

        // estrutura do card
        card.innerHTML = `
            <div class="foto" onclick="mostrarDetalhe(this)">
                <img src="${receita.imagem}" alt="${receita.nome}">
            </div>

            <div class="receita">${receita.nome}</div>

            <div class="outro">

                <div class="time">
                    <i class='bx bxs-time'></i>
                    <span>${receita.tempo}</span>
                </div>

                <div class="porcoes">
                    <i class='bx bxs-dish'></i>
                    <span>${receita.porcoes}</span>
                </div>

                <div class="like">
                <i class='bx bxs-heart heart' 
                onclick="toggleFavorite(this)"></i>
                </div>
            </div>
        `;

        // adiciona a classe 'favorited' se a receita estiver nos favoritos
        const heartIcon = card.querySelector('.heart');
        if (favoritos.includes(receita.id)) {
            heartIcon.classList.add('favorited');
        }

        // adiciona o card ao container
        container.appendChild(card);
    }

    // filtra as receitas que são favoritas
    const receitasFavoritas = data.receitas.filter(receita => favoritos.includes(receita.id));

    if (receitasFavoritas.length === 0) {
        msg.innerHTML = 'Nenhuma receita favoritada.';
    }

    // cria o card para cada receita
    receitasFavoritas.forEach(receita => {
        createCard(receita);
    });
});

