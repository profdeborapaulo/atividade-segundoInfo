function listar() {
    var usuario = localStorage.getItem('Logado'); // Obtém o nome do usuário logado
    var dados = JSON.parse(localStorage.getItem('usuario')); // Obtém os dados do usuário do localStorage

    dados.forEach(function (dado) {
        if (dado.nome == usuario) { // Verifica se o dado corresponde ao usuário logado
            let listagem = dado.lista; // Obtém a lista de itens do usuário
            let numerosos = dado.numeros; // Obtém a lista de números do usuário
            listagem.forEach(function (item, index) {
                var estruturacao = document.createElement("div"); // Cria um novo div para estruturar o item
                estruturacao.classList.add("estrutura"); // Adiciona a classe 'estrutura' ao div

                var classe = document.querySelectorAll(".estrutura"); // Obtém todos os elementos com a classe 'estrutura'
                var quantidadeClasse = parseInt(classe.length); // Conta quantos elementos com a classe 'estrutura' existem
                estruturacao.setAttribute("id", "estrutura" + quantidadeClasse); // Define um ID único para o div

                var texto = document.createElement("p"); // Cria um novo parágrafo para o texto
                texto.textContent = item; // Define o texto do parágrafo
                texto.classList.add("texos"); // Adiciona a classe 'texos' ao parágrafo

                var numero = document.createElement("p"); // Cria um novo parágrafo para o número
                numero.textContent = numerosos[index]; // Define o número correspondente
                numero.classList.add("numeros"); // Adiciona a classe 'numeros' ao parágrafo
                
                var agrupamento = document.createElement("div"); // Cria um novo div para agrupar o texto e o número
                agrupamento.classList.add("agrupar"); // Adiciona a classe 'agrupar' ao div
                agrupamento.setAttribute("id", "agrupar" + quantidadeClasse); // Define um ID único para o div

                var funcao = document.createElement("div"); // Cria um novo div para os botões de função
                funcao.classList.add("funcoes"); // Adiciona a classe 'funcoes' ao div

                var butao1 = document.createElement("input"); // Cria um botão de edição
                butao1.setAttribute("type", "button"); // Define o tipo do botão como 'button'
                butao1.classList.add("editar"); // Adiciona a classe 'editar' ao botão
                butao1.setAttribute("onclick", "editar(" + "'agrupar" + quantidadeClasse + "')"); // Define a função de onclick para o botão
                butao1.setAttribute("value", "==>"); // Define o texto do botão

                var butao2 = document.createElement("input"); // Cria um botão de exclusão
                butao2.setAttribute("type", "button"); // Define o tipo do botão como 'button'
                butao2.classList.add("excluir"); // Adiciona a classe 'excluir' ao botão
                butao2.setAttribute("onclick", "excluir(" + "'agrupar" + quantidadeClasse + "')"); // Define a função de onclick para o botão
                butao2.setAttribute("value", "X"); // Define o texto do botão

                agrupamento.appendChild(numero); // Adiciona o número ao div de agrupamento
                agrupamento.appendChild(texto); // Adiciona o texto ao div de agrupamento

                funcao.appendChild(butao1); // Adiciona o botão de edição ao div de funções
                funcao.appendChild(butao2); // Adiciona o botão de exclusão ao div de funções

                estruturacao.appendChild(agrupamento); // Adiciona o div de agrupamento ao div de estruturação
                estruturacao.appendChild(funcao); // Adiciona o div de funções ao div de estruturação

                var referiencia = document.getElementById('reference'); // Obtém o elemento de referência para inserção
                referiencia.parentNode.insertBefore(estruturacao, referiencia); // Insere o novo div antes do elemento de referência
            });
        }
    });
}

function editar(id) {
    var tela = document.getElementById('alinhar'); // Obtém a tela de edição
    tela.style.display = "flex"; // Torna a tela visível
    tela.style.animation = "aparecer forwards 0.5s"; // Adiciona uma animação de aparecimento

    var grupos = document.getElementById(id); // Obtém o grupo a ser editado
    var texto = grupos.querySelector('.texos').textContent; // Obtém o texto atual do grupo

    var listaIndex;

    document.getElementById('editar-texto').onclick = function() { // Define a função de clique para o botão de editar texto
        var textoEditado = prompt("Digite o novo texto:"); // Solicita o novo texto
        if (textoEditado === null || textoEditado.trim() === "") return; // Se o usuário cancelar ou enviar vazio, não faz nada

        var usuario = localStorage.getItem('Logado'); // Obtém o nome do usuário logado
        var dados = JSON.parse(localStorage.getItem('usuario')); // Obtém os dados do usuário do localStorage
        
        dados.forEach(function(dado) {
            if (dado.nome == usuario) { // Verifica se os dados correspondem ao usuário logado
                var listas = dado.lista; // Obtém a lista de itens do usuário
                listas.forEach(function(item, index) {
                    if (item == texto) { // Verifica se o item corresponde ao texto atual
                        listas.splice(index, 1, textoEditado); // Substitui o texto na lista
                        listaIndex = index; // Armazena o índice do item editado
                        localStorage.setItem('usuario', JSON.stringify(dados)); // Atualiza os dados no localStorage
                        window.location.reload(); // Recarrega a página para refletir as mudanças
                    }
                });
                
            }
        });
    }

    document.getElementById('editar-quantidade').onclick = function() { // Define a função de clique para o botão de editar número
        var numeroEditado = parseInt(prompt("Digite um novo número:")); // Solicita um novo número
        if (numeroEditado === null || numeroEditado === "") return; // Se o usuário cancelar ou enviar vazio, não faz nada

        var usuario = localStorage.getItem('Logado'); // Obtém o nome do usuário logado
        var dados = JSON.parse(localStorage.getItem('usuario')); // Obtém os dados do usuário do localStorage

        dados.forEach(function(dado) {
            if (dado.nome == usuario) { // Verifica se os dados correspondem ao usuário logado
                var listas = dado.lista; // Obtém a lista de itens do usuário
                listas.forEach(function(item, index) {
                    if (item == texto) { // Verifica se o item corresponde ao texto atual
                        var numeros = dado.numeros; // Obtém a lista de números do usuário
                        var indice = index; // Armazena o índice do item editado
                        numeros.splice(indice, 1, numeroEditado); // Substitui o número na lista
                        localStorage.setItem('usuario', JSON.stringify(dados)); // Atualiza os dados no localStorage
                        window.location.reload(); // Recarrega a página para refletir as mudanças
                    }
                });
            }
        })
    }
}

function excluir(id) {
    var grupos = document.getElementById(id); // Obtém o grupo a ser excluído
    var texto = grupos.querySelector('.texos').textContent; // Obtém o texto do grupo

    var usuario = localStorage.getItem('Logado'); // Obtém o nome do usuário logado
    var dados = JSON.parse(localStorage.getItem('usuario')); // Obtém os dados do usuário do localStorage

    dados.forEach(function(dado) {
        if (dado.nome == usuario) { // Verifica se os dados correspondem ao usuário logado
            var listas = dado.lista; // Obtém a lista de itens do usuário
            var numeros = dado.numeros; // Obtém a lista de números do usuário
            listas.forEach(function(item, index) {
                if (item == texto) { // Verifica se o item corresponde ao texto a ser excluído
                    listas.splice(index, 1); // Remove o item da lista
                    numeros.splice(index, 1); // Remove o número correspondente da lista
                    localStorage.setItem('usuario', JSON.stringify(dados)); // Atualiza os dados no localStorage
                    window.location.reload(); // Recarrega a página para refletir as mudanças
                }
            })
        }
    })
}

function fechar() {
    var tela = document.getElementById('alinhar'); // Obtém a tela de edição
    tela.style.animation = "desaparecer forwards 0.5s"; // Adiciona uma animação de desaparecimento
    setTimeout(function () {
        tela.style.display = "none"; // Oculta a tela após a animação
    }, 500);
}