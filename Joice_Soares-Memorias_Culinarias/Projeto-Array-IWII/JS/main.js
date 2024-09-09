// FUNÇÃO PESQUISAR POR FILTRO
function search(categoria) {
    // redireciona para a página de filtro com o parâmetro de categoria na URL
    window.location.href = `./HTML/pesquisa.html?categoria=${encodeURIComponent(categoria)}`;
}

// FUNÇÃO MOSTRAR DETALHE RECEITA
function mostrarDetalhe(element) {

    // encontra o elemento 'card'
    const card = element.closest('.card');
    const receitaId = card.getAttribute('data-id'); // obtém o ID da receita do atributo data-id
    
    // redireciona para a página de detalhes da receita correspondente
    window.location.href = `./HTML/detalhe.html?id=${receitaId}`;
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




