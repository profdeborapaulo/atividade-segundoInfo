// Função para carregar dados do servidor
function carregarDados() {
    fetch('/dados') // Faz uma requisição para a rota '/dados'
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            console.log(data); // Exibe os dados no console
        })
        .catch(error => console.error('Erro ao carregar os dados:', error)); // Captura e exibe erros no carregamento
}

carregarDados(); // Chama a função para carregar dados ao iniciar

// Função para ajustar a altura de uma textarea dinamicamente com base no conteúdo
function adjustHeight(x) {
    x.style.height = 'auto'; // Redefine a altura para recalcular
    x.style.height = x.scrollHeight + 'px'; // Define a altura com base no conteúdo
}

// Seleção de elementos necessários para manipulação
const btt = document.querySelectorAll('button'); // Seleciona todos os botões
const errorMsg = document.querySelector('#error-msg'); // Seleciona o elemento de mensagem de erro
const divCaps = document.querySelector('.txtBars'); // Seleciona a div onde estão as textareas

// Adiciona um novo campo de texto (textarea) ao clicar no segundo botão
btt[1].addEventListener('click', () => {
    const newTxtArea = document.createElement('textarea'); // Cria uma nova textarea
    newTxtArea.setAttribute('oninput', 'adjustHeight(this)'); // Define o ajuste de altura ao digitar
    divCaps.appendChild(newTxtArea); // Adiciona a nova textarea à div
});

// Remove o último campo de texto ao clicar no terceiro botão
btt[2].addEventListener('click', () => {
    const lastElement = divCaps.lastElementChild; // Obtém o último elemento da div
    if (lastElement && lastElement !== btt[1]) { // Garante que não remove o botão em si
        divCaps.removeChild(lastElement); // Remove o último elemento
    }
});

// Valida e salva os dados ao clicar no quarto botão
btt[3].addEventListener('click', () => {
    const inputs = document.querySelectorAll('input'); // Seleciona todos os inputs
    const textarea = document.querySelectorAll('textarea'); // Seleciona todas as textareas

    const dataSe = inputs[1].value; // Obtém a data do segundo input
    const diffDates = Math.floor(new Date(dataSe).getTime() / 1000 / 60 / 60 / 24 - new Date().getTime() / 1000 / 60 / 60 / 24) + 1; // Calcula a diferença de dias entre a data atual e a inserida

    let t = 0; // Contador para campos de texto vazios
    textarea.forEach((element) => {
        if (!element.value) { // Verifica se o campo está vazio
            t++;
        }
    });

    // Valida os campos obrigatórios
    if (!inputs[0] || !inputs[1] || t > 0) { 
        console.error("Insira Dados!"); // Exibe erro no console
        errorMsg.innerHTML = "Insira Dados!"; // Exibe erro na página
        return;
    } else if (diffDates <= 0) { // Valida se a data é no futuro
        console.log('Data Inválida!');
        errorMsg.innerHTML = "Data Inválida!";
        return;
    } else {
        let texts = []; // Array para armazenar textos das textareas

        // Adiciona os textos das textareas ao array
        textarea.forEach((element) => {
            texts.push(element.value);
        });

        console.log(texts); // Exibe os textos no console

        // Cria o objeto com os dados a serem salvos
        const newValues = {
            name: inputs[0].value, // Nome da cápsula
            openDate: inputs[1].value, // Data de abertura
            color: inputs[2].value, // Cor selecionada
            text: texts, // Textos inseridos
            todayDate: Date(), // Data atual
            owner: sessionStorage.getItem('userId') // ID do usuário
        };

        // Envia os dados ao servidor para salvar
        fetch('/salvar', {
            method: 'POST', // Método HTTP POST
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify({ 
                data: newValues, // Dados a serem salvos
                pathern: 'data.json' // Caminho do arquivo onde salvar
            }),
        })
            .then(response => {
                if (response.ok) { // Verifica se a resposta foi bem-sucedida
                    console.log('Dado adicionado com sucesso');
                    carregarDados(); // Atualiza os dados na página
                    window.location.href = '../views/menu.html'; // Redireciona para a página inicial
                } else {
                    console.error('Erro ao salvar o dado');
                }
            })
            .catch(error => console.error('Erro ao enviar os dados:', error)); // Captura e exibe erros no envio
    }
});
