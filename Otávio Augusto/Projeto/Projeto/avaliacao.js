let numeroEstrelas = 0; // Inicializa a variável para armazenar o número de estrelas selecionadas

var stars = document.querySelectorAll('.star-icon'); // Seleciona todos os elementos com a classe 'star-icon'
stars.forEach(star => { // Itera sobre cada elemento de estrela
    star.addEventListener('click', function (e) { // Adiciona um ouvinte de evento para cliques em cada estrela
        stars.forEach(function (s) { // Itera sobre cada estrela para remover a classe 'ativo'
            s.classList.remove('ativo'); // Remove a classe 'ativo' de todas as estrelas
        });
        e.target.classList.add('ativo'); // Adiciona a classe 'ativo' à estrela clicada
        numeroEstrelas = parseInt(e.target.getAttribute('data-avaliacao'), 10); // Obtém o número de estrelas a partir do atributo 'data-avaliacao' e converte para número
        console.log('Número de estrelas selecionado:', numeroEstrelas); // Exibe o número de estrelas selecionado no console
    });
});

const salvarBtn = document.getElementById('salvarBtn'); // Seleciona o botão de salvar
const inputAvaliacao = document.getElementById('avaliacao'); // Seleciona o campo de entrada de avaliação
const mensagem = document.getElementById('mensagem'); // Seleciona o elemento para exibir mensagens de feedback
const filmeSelecionado = document.title; // Obtém o título da página atual, que é usado para identificar o filme

salvarBtn.addEventListener('click', function () { // Adiciona um ouvinte de evento para o clique no botão de salvar
    const avaliacao = inputAvaliacao.value; // Obtém o valor do campo de entrada de avaliação

    if (avaliacao) { // Verifica se o campo de avaliação não está vazio
        let avaliacoesSalvas = JSON.parse(localStorage.getItem('avaliacoes')) || []; // Recupera as avaliações armazenadas no Local Storage ou inicializa um array vazio se não houver avaliações
        const novaAvaliacao = { // Cria um objeto com a nova avaliação
            texto: avaliacao, // Armazena o texto da avaliação
            estrelas: numeroEstrelas, // Armazena o número de estrelas selecionadas
            filme: filmeSelecionado // Armazena o nome do filme (título da página)
        };

        avaliacoesSalvas.push(novaAvaliacao); // Adiciona a nova avaliação ao array de avaliações
        localStorage.setItem('avaliacoes', JSON.stringify(avaliacoesSalvas)); // Armazena o array atualizado no Local Storage

        mensagem.textContent = 'Avaliação salva com sucesso!'; // Exibe uma mensagem de sucesso
        inputAvaliacao.value = ''; // Limpa o campo de entrada de avaliação
        numeroEstrelas = 0; // Opcional: limpa a seleção de estrelas
    } else {
        mensagem.textContent = 'Por favor, insira uma avaliação antes de salvar.'; // Exibe uma mensagem de erro se o campo de avaliação estiver vazio
    }
});
