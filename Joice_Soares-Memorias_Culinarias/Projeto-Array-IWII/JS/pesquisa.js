// carrega as receitas do arquivo JSON quando a página é carregada
document.addEventListener('DOMContentLoaded', function () {
    fetch('../JS/receitas.json')
        .then(response => response.json())
        .then(data => {
            const receitas = data.receitas;
            const inputPesquisa = document.querySelector('.pesquisa-card input');
            const resultadosDiv = document.getElementById('receitas-encontradas');

            // filtra as receitas com base na pesquisa
            inputPesquisa.addEventListener('input', function () {
                const termoPesquisa = inputPesquisa.value.toLowerCase();

                resultadosDiv.innerHTML = ''; // limpa os resultados anteriores

                // padroniza tudo para caixa alta
                const receitasFiltradas = receitas.filter(receita =>
                    receita.nome.toLowerCase().includes(termoPesquisa)
                );

                // exibe as receitas filtradas
                receitasFiltradas.forEach(receita => {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.setAttribute('data-id', receita.id); // adiciona o data-id para que updateHeartIcons funcione

                    // estrutura do card das receitas a serem mostradas
                    card.innerHTML = `
        <div class="foto" onclick="mostrarDetalhe(this)"><img src="${receita.imagem}" alt="${receita.nome}"></div>
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
                <i class='bx bxs-heart heart' onclick="toggleFavorite(this)"></i>
            </div>
        </div>
    `;
                    resultadosDiv.appendChild(card);
                });

                // se não encontrar nenhuma receita correspondente, exibe uma msg
                if (receitasFiltradas.length === 0) {
                    resultadosDiv.innerHTML = '<p>Nenhuma receita encontrada.</p>';
                }
                // atualiza o estado dos ícones de coração
                updateHeartIcons();
            });
            // atualiza o estado dos ícones de coração ao carregar as receitas
            updateHeartIcons();
        })
        // mensagem de erro
        .catch(error => console.error('Erro ao carregar receitas:', error));
});

//PESQUISA POR FILTRO
document.addEventListener('DOMContentLoaded', () => {
    // captura o parâmetro de categoria da URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');

    // carrega e filtra as receitas com base na categoria
    fetch('../JS/receitas.json')
        .then(response => response.json())
        .then(data => {
            const receitas = data.receitas;
            const receitasFiltradas = receitas.filter(receita => receita.categoria === categoria);

            // chama a função para exibira na página as receitas filtradas 
            exibirReceitas(receitasFiltradas);
        })
        .catch(error => console.error('Erro ao carregar receitas:', error));
});

// FUNÇÃO PARA EXIBIR AS RECEITAS FILTRADAS
function exibirReceitas(receitas) {
    const container = document.getElementById('receitas-encontradas'); // seção onde as receitas serão exibidas
    container.innerHTML = ''; // limpa a seção antes de adicionar novas receitas

    if (receitas.length === 0) {
        container.innerHTML = '<p>Nenhuma receita encontrada.</p>';
    }

    receitas.forEach(receita => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', receita.id); // adiciona o data-id para que  a função updateHeartIcons funcione

        card.innerHTML = `
            <div class="foto" onclick="mostrarDetalhe(this)"><img src="${receita.imagem}" alt="${receita.nome}"></div>
            <div class="receita">${receita.nome}</div>
            <div class="outro">
                <div class="time"><i class='bx bxs-time'></i><span>${receita.tempo}</span></div>
                <div class="porcoes"><i class='bx bxs-dish'></i><span>${receita.porcoes}</span></div>
                <div class="like"><i class='bx bxs-heart heart' onclick="toggleFavorite(this)"></i></div>
            </div>
        `;
        // adiciona "card" como filho da div "container"
        container.appendChild(card);
    });
    updateHeartIcons();
}

// FUNÇÃO DETALHES
function mostrarDetalhe(element) {
    const card = element.closest('.card');
    const receitaId = card.getAttribute('data-id');

    window.location.href = `../HTML/detalhe.html?id=${receitaId}`; // redireciona para a pag de detalhes
}