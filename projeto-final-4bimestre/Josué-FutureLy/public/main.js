function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function sendMessage() {
    const msgInput = document.getElementById('msg');
    const respostaDiv = document.getElementById('resposta');
    
    // Pega a mensagem digitada
    const userQuestion = msgInput.value.trim();
    
    if (!userQuestion) {
        return alert("Por favor, digite uma mensagem.");
    }

    // Cria o elemento para mostrar a pergunta do usuário
    const divUserQuestion = document.createElement('div');
    divUserQuestion.classList.add('userResponse');
    divUserQuestion.innerText = userQuestion;
    respostaDiv.appendChild(divUserQuestion);

    // Limpa o campo de entrada de texto
    msgInput.value = '';

    var dados = getQueryParameter('persona');

    // Envia a mensagem para o servidor
    fetch("/chat", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msg: userQuestion,
            persona: dados
         })
    })
    .then(response => response.json())
    .then(data => {
        const botAnswer = data.response;

        // Cria o elemento para mostrar a resposta do bot
        const divBotAnswer = document.createElement('div');
        divBotAnswer.classList.add('botAnswer');
        divBotAnswer.innerText = botAnswer;
        respostaDiv.appendChild(divBotAnswer);
    })
    .catch(error => {
        console.error("Erro ao processar a mensagem:", error);
        alert("Erro ao se comunicar com o servidor.");
    });
}