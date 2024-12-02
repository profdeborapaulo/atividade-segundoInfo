function submitComment() {
    // Pega o valor do comentário
    const comment = document.getElementById('commentInput').value;

    // Verifica se o comentário não está vazio
    if (comment.trim() === "") {
        alert("Por favor, digite um comentário!");
        return;
    }

    // Cria um novo elemento para o comentário
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = comment;

    // Adiciona o comentário à seção de comentários
    const commentsSection = document.getElementById('commentsSection');
    commentsSection.appendChild(commentElement);

    // Limpa o campo de comentário após o envio
    document.getElementById('commentInput').value = "";
}