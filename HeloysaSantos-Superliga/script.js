//index.html
function updateCountdown() { //Função para contaegm regressiva
    const targetDate = new Date('2024-10-19T00:00:00').getTime(); // Definindo data final
    const now = new Date().getTime(); //Pegando data e hora atual
    const difference = targetDate - now; //Calculando a diferença da data final e a data atual

    //Convertendo a diferença para dias, horas, mimutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    ///Atualizando o conteudo do id para exibir p tempo
    document.getElementById("countdown").innerHTML = 
        `${days}D ${hours}H ${minutes}M ${seconds}S`;

    //Se a diferença for menor que 0 exibir a mensagem
    if (difference < 0) {
        document.getElementById("countdown").innerHTML = "Superliga de Volei Feminina Chegou!";
    }
}
setInterval(updateCountdown, 1000); //A função deve ser executada a cada 1 segundo


let comentarios = [];// Array de comentários


if (localStorage.getItem('comentarios')) { // Verifica se existem comentários salvos no localStorage
    comentarios = JSON.parse(localStorage.getItem('comentarios'));
    atualizarListaComentarios();
}


function atualizarListaComentarios() { // Função para atualizar a lista de comentários na página
    const listaComentarios = document.getElementById('listaComentarios');
    listaComentarios.innerHTML = '';

    comentarios.forEach((comentario, index) => {
        const li = document.createElement('li');
        li.textContent = comentario;
        listaComentarios.appendChild(li);
    });
}


document.getElementById('comentarioForm').addEventListener('submit', function(event) { // Evento de envio do formulário
    event.preventDefault();// Evita o envio do formulário

    const comentario = document.getElementById('comentario').value;

    comentarios.push(comentario);// Adicionar o novo comentário ao array usando push

    localStorage.setItem('comentarios', JSON.stringify(comentarios)); // Salvar o array atualizado no localStorage

    atualizarListaComentarios();  // Atualizar a lista de comentários exibida na página

    document.getElementById('comentario').value = ''; // Limpar o campo de entrada
});


