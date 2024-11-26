
//criando a função para adicionar o produto
function addProduto() {
    //aqui vou criar variáveis, e cada uma dessas variáveis vão ser pegas pelo ID que foi passado no html de addproduto
    let nomeProduto = document.getElementById('produto').value;
    let descricao = document.getElementById('descricao').value;
    let preco = document.getElementById('preco').value;
    let imagem = document.getElementById('imagem'); // Pega o elemento que contém a imagem, mas ainda não o arquivo
    var dadosdaimagem; // Variável que vai armazenar a imagem depois de ser processada

    // aqui vai pegar o arquivo da img que o ser humano adiministrados escolheu 
    const arquivo = imagem.files[0];


    // preciso saber se todos os campos foram preenchidos corretamente
    if (nomeProduto === "" || descricao === "" || preco === "" || !arquivo) {
        alert("Preencha todos os campos"); // se estiver vazio vai dizer que é para preencher os campos
        return; // o return tem como objetivo de parar a execução da função, caso um dos campos estiver em branco
    } else {
        //agora se os campos estiverem preenchidos, vai poder continuar o andamento da função
        
        if (arquivo)/* no caso a img*/ {
            const leitor = new FileReader(); // vou ter criar um leitor do arquivo que vai ter que processar a imagem para ser salva
    
            // aqui em baixo sera chamada uma função quando o arquivo de img for completamente lido
            leitor.onload = function (event) {
                dadosdaimagem = event.target.result; // O arquivo da img vai ser convertido em um formato em que o computador normalmente atende, que é (Base64)
    
                // depois disso o código vai fazer buscar os dados que estão no localStorage, as informações que foram salvas
                // caso não tenha nada salvo nele, vai criar uma array vazia para armazenar os dados
                var informacoesProduto = JSON.parse(localStorage.getItem('produto')) || [];
    
                // aqui vai ser adicionado o novo produto, o usuário preencheu as informações dentro da lista de produtos já armazenados
                informacoesProduto.push({
                    produto: nomeProduto, 
                    descricao: descricao, 
                    valor: preco,
                    img: dadosdaimagem // a img vai ser processada em formato Base64, que vai fazer ficar salva facilmente
                });
    
                
                // Agora, salvamos a lista atualizada de produtos no localStorage, transformando o array de volta para formato JSON (texto)
                localStorage.setItem('produto', JSON.stringify(informacoesProduto));
    
                // depois de todo esse processo, o adm vai ser levado para a página de produtos adm, e caso ele queira novamente add um outro produto, ele vai precisar entrar no botão de cadastrar produto novamente.
                window.location.href = 'produtoadm.html';
            };
    
         // aqui para a img aparecer, foi necessario pedir ao leitor, para começar a ler o arquivo de img e converter para o formato Base64
            leitor.readAsDataURL(arquivo);
        }
    }

}