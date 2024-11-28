function formulario() {
    let nome = document.getElementById('nome').value; // Pega o valor do campo nome
    let descricao = document.getElementById('descricao').value; // Pega o valor do campo descrição
    let tags = document.getElementById('tags').value; // Pega o valor do campo tags

    var item = ""; // Variável para armazenar as chaves do localStorage
    var texto = ""; // Variável para armazenar o nome do item (comentário)
    var comentarios = 0; // Contador de comentários já armazenados

    // Verifica se todos os campos estão preenchidos
    if (nome == "" || descricao == "" || tags == "") {
        alert("preencha todos os campos!!"); // Alerta se algum campo estiver vazio
    } else {
        let comentario = { // Cria o objeto do comentário
            nome: nome,
            descricao: descricao,
            tags: tags,
            upvotes: 0, // Inicializa o contador de likes
            downvotes: 0 // Inicializa o contador de deslikes
        };

        let tamanho = localStorage.length; // Pega o número total de itens no localStorage

        // Percorre todos os itens armazenados no localStorage para contar os comentários
        for (let i = 0; i < tamanho; i++) {
            item = localStorage.key(i); // Pega a chave do item no localStorage
            texto = item.replace(/\d+$/, ""); // Remove a parte numérica da chave
            if (texto == "comentario") { // Verifica se o item é um comentário
                comentarios++; // Incrementa o contador de comentários
            }
        }

        // Se não houver comentários, armazena o primeiro comentário como "comentario0"
        if (comentarios <= 0) {
            localStorage.setItem("comentario0", JSON.stringify(comentario)); // Armazena o comentário no localStorage
            window.location.href = '../comunidade/comunidade.html'; // Redireciona para a página de comunidade
        }

        // Se já houver comentários, armazena o novo comentário com a chave "comentario" + numero
        if (comentarios > 0) {
            localStorage.setItem("comentario" + comentarios, JSON.stringify(comentario)); // Armazena o comentário no localStorage
            window.location.href = '../comunidade/comunidade.html'; // Redireciona para a página de comunidade
        }
    }
}

window.addEventListener('mousemove', function (event) {

    var item = document.querySelector('.formulario'); // pega o formulário

    let bordas = item.getBoundingClientRect(); // Pega as bordas do forms para verificar a posição do mouse

    // Verifica se o mouse está dentro das bordas do formulário
    if (
        event.clientX >= bordas.left &&
        event.clientX <= bordas.right &&
        event.clientY >= bordas.top &&
        event.clientY <= bordas.bottom
    ) {
        item.style.transform = `rotateX(0deg) rotateY(0deg)`; // Restaura a rotação do formulário
        item.style.transition = 'all 0.3s ease' // Adiciona uma transição suave
        item.style.transform = `scale(1.1)`; // Aumenta o tamanho do formulário
    } else {
        let mouseX = event.clientX; // Pega a posição X do mouse
        let mouseY = event.clientY; // Pega a posição Y do mouse

        let centroX = window.innerWidth / 2; // Calcula o centro da tela
        let centroY = window.innerHeight / 2; // Calcula o centro da tela

        let posX = (mouseX - centroX) * 0.05; // Calcula o movimento do formulário no eixo X
        let posY = (centroY - mouseY) * 0.05; // Calcula o movimento do formulário no eixo Y

        item.style.transform = `rotateX(${posY}deg) rotateY(${posX}deg)`; // Aplica a rotação do formulário com base na posição do mouse
    }
});