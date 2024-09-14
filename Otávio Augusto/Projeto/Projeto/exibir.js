// Seleciona o elemento onde as avaliações serão exibidas
const listaAvaliacoes = document.getElementById('listaAvaliacoes');

// Função para exibir as avaliações armazenadas
function exibirAvaliacoes() {
    // Recupera o array de avaliações do Local Storage ou inicializa um array vazio se não houver avaliações
    const avaliacoesSalvas = JSON.parse(localStorage.getItem('avaliacoes')) || [];

    // Verifica se há avaliações armazenadas
    if (avaliacoesSalvas.length === 0) {
        listaAvaliacoes.textContent = 'Nenhuma avaliação disponível.';
    } else {
        listaAvaliacoes.innerHTML = ''; // Limpa a lista antes de exibir

        // Percorre o array de avaliações e cria um item de lista para cada uma
        avaliacoesSalvas.forEach(function(avaliacao) {
            const li = document.createElement('li');
            li.className = 'list-group-item'; // Classe Bootstrap para estilizar a lista


            // Exibe a quantidade de estrelas
            const stars = document.createElement('p');
            stars.innerHTML = 'Nota: ' + '★'.repeat(avaliacao.estrelas) + '☆'.repeat(5 - avaliacao.estrelas);
            stars.className = 'mb-1'; // Classe Bootstrap para margem 
            
            // Exibe o filme a qual foi comentado
            let filmeComentado = document.createElement('p')
            filmeComentado.innerHTML = ('Filme: ' + avaliacao.filme);
            filmeComentado.className = 'mb-1';

            // Exibe o comentário
            const comentario = document.createElement('p');
            comentario.textContent = ('Comentário: ' + avaliacao.texto);
            comentario.className = 'mb-0'; // Classe Bootstrap para remover margem inferior

            

            // Adiciona as estrelas e o comentário ao item da lista
            li.appendChild(stars);
            li.appendChild(filmeComentado);
            li.appendChild(comentario);

            // Adiciona o item de lista à lista de avaliações
            listaAvaliacoes.appendChild(li);
        });
    }
}

// Chama a função para exibir as avaliações ao carregar a página
window.addEventListener('load', exibirAvaliacoes);