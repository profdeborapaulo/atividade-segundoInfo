// script.js

function predict() {
    const responses = ["Sim", "Não", "Talvez", "Provavelmente não", "Sim, mas não do jeito que você espera", "É incerto"];
    
    // Obter a pergunta digitada pelo usuário (opcional, mas podemos usar a pergunta para alguma outra coisa no futuro)
    const question = document.getElementById("question").value;
    
    // Se a pergunta estiver vazia, mostrar uma mensagem de erro
    if (question.trim() === "") {
        document.getElementById("response").innerHTML = "Por favor, faça uma pergunta primeiro!";
        return;
    }
    
    // Selecionar uma resposta aleatória
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Mostrar a resposta na tela
    document.getElementById("response").innerHTML = randomResponse;
}