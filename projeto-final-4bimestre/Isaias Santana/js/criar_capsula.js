// Adiciona um evento de submissão ao formulário com o ID "capsuleForm"
document.getElementById("capsuleForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário e o recarregamento da página

    // Obtém os valores inseridos nos campos do formulário
    const texto = document.getElementById("texto").value; // Mensagem para o futuro
    const arquivosInput = document.getElementById("arquivo").files; // Arquivos enviados (imagens, vídeos)
    const dataFutura = document.getElementById("dataFutura").value; // Data para abrir a cápsula

    // Recupera os usuários cadastrados e o usuário ativo do localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];
    const usuarioAtivo = localStorage.getItem("usuarioAtivo");

    // Encontra o usuário ativo a partir do e-mail armazenado no localStorage
    const usuario = usuarios.find(user => user.email === usuarioAtivo);

    // Se o usuário ativo não for encontrado, exibe um alerta e encerra a execução
    if (!usuario) {
        alert("Usuário ativo não encontrado!");
        return;
    }

    // Cria um array para armazenar os arquivos e um array de promessas para ler os arquivos
    const arquivos = [];
    const filePromises = [];

    // Para cada arquivo enviado, cria uma promessa para ler o conteúdo do arquivo
    for (const arquivo of arquivosInput) {
        const reader = new FileReader();
        const filePromise = new Promise((resolve, reject) => {
            reader.onload = function () {
                // Quando o arquivo for lido, adiciona o conteúdo ao array de arquivos
                arquivos.push({ nome: arquivo.name, conteudo: reader.result });
                resolve();
            };
            reader.onerror = function (error) {
                reject(error); // Se ocorrer um erro ao ler o arquivo, rejeita a promessa
            };
            reader.readAsDataURL(arquivo); // Lê o arquivo como uma URL de dados (base64)
        });
        filePromises.push(filePromise); // Adiciona a promessa ao array de promessas
    }

    // Aguarda todas as promessas de leitura de arquivos serem resolvidas
    Promise.all(filePromises).then(() => {

        // Atualiza o usuário com as informações da cápsula (mensagem e arquivos)
        usuario.capsula = { texto, arquivos };
        usuario.futureDate = new Date(dataFutura).toISOString(); // Armazena a data futura em formato ISO

        // Atualiza o localStorage com os dados modificados
        localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));

        // Exibe um alerta de sucesso e redireciona o usuário para a página de contagem regressiva
        alert("Cápsula criada com sucesso!");
        window.location.href = "contador.html"; // Redireciona para a página de contagem regressiva

    }).catch(error => {
        // Em caso de erro ao processar os arquivos, exibe uma mensagem de erro
        console.error("Erro ao processar arquivos:", error);
        alert("Houve um erro ao processar os arquivos.");
    });
});
