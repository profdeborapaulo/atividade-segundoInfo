

//agaurda o carregamento do site para proseguir com a função
document.addEventListener('DOMContentLoaded', function () {

    //pega os dados da imagem e do botao
    const image = document.getElementById('imagem');
    const downloadButton = document.getElementById('botao');

    //adiciona o evento de ouvinte paar executar a função quando o botão for precionado
    downloadButton.addEventListener('click', function (e) {
        e.preventDefault(); // impede que o navegador execute o comportamento padrao do evento

        const link = document.createElement('a'); //cria um elemento a para referenciar o link
        link.href = image.src; //o atributo href é definido com o valor do scr da imagem, para uquando cliacdo o navegador acessa o url forncedio pelo href

        //o atributo dowload especifica que o link deve ser tratado como download e não como uma navegação normal
        //o valor desse atributo define o nome do arquivo baixadp
        link.download = 'imagem-baixada.jpg';

        //o link cirado é adicionado no corpo do documento para o link ser cliacdo
        document.body.appendChild(link);

        //simula o clique no link para que o download seja iniciado automaticamente, como se o usuario tivesse cliacdo
        link.click(); 

        //remove o link do corpo do documento com a finalização
        document.body.removeChild(link); 
    });
});

const urlParams = new URLSearchParams(window.location.search);
const imagens = urlParams.get("path")
document.getElementById("imagem").src=imagens
