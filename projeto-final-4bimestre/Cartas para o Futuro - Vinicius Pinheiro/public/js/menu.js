// Função principal para criar elementos na interface com base nos dados recebidos do servidor.
function createAll() {
    // Faz uma requisição para o endpoint '/dados' e obtém os dados.
    fetch('/dados')
        .then(response => response.json()) // Converte a resposta para JSON.
        .then(data => { // Processa os dados recebidos.
            // Verifica a variável `ask` para determinar quais dados exibir.
            if (ask == 0) {
                // Filtra e exibe as cápsulas já abertas.
                data.map((value, index) => {
                    // Calcula a diferença entre a data de abertura e a data atual em dias.
                    const diffDates = Math.floor(
                        new Date(value.openDate).getTime() / 1000 / 60 / 60 / 24 -
                        new Date().getTime() / 1000 / 60 / 60 / 24
                    ) + 1;

                    // Exibe apenas as cápsulas já abertas e pertencentes ao usuário atual.
                    if (diffDates < 1 && value.owner == userIdJs) {
                        divCaps.innerHTML += `
                            <div class="info-area" style="background: ${value.color}">
                                <div class="info">
                                    <p>${value.name}</p>
                                    <p>Aberto há ${diffDates * -1} dias</p>
                                </div>
                                <a href="../views/letter.html?id=${index}">Entrar</a>
                            </div>
                        `;
                    }
                });
            }

            if (ask == 1) {
                // Filtra e exibe as cápsulas ainda não abertas.
                data.map((value, index) => {
                    // Calcula a diferença entre a data de abertura e a data atual em dias.
                    const diffDates = Math.floor(
                        new Date(value.openDate).getTime() / 1000 / 60 / 60 / 24 -
                        new Date().getTime() / 1000 / 60 / 60 / 24
                    ) + 1;

                    // Exibe apenas as cápsulas que ainda não abriram e pertencem ao usuário atual.
                    if (diffDates > 1 && value.owner == userIdJs) {
                        divCaps.innerHTML += `
                            <div class="info-area" style="background: ${value.color}">
                                <div class="info">
                                    <p>${value.name}</p>
                                    <p>Abrirá em ${diffDates} dias</p>
                                </div>
                            </div>
                        `;
                    }
                });
            }

            // Loga o valor de `ask` no console para depuração.
            console.log(ask);
        })
        .catch(error => console.error('Erro ao carregar os dados:', error)); // Exibe erro no console caso a requisição falhe.
}

// Obtém o ID do usuário armazenado no `sessionStorage`.
const userIdJs = sessionStorage.getItem('userId');

// Obtém os botões "abertos" e "fechados" pelo ID.
const openedBtt = document.getElementById('opened'); // Botão para mostrar cápsulas abertas.
const closedbtt = document.getElementById('closed'); // Botão para mostrar cápsulas fechadas.

// Seleciona o container onde as cápsulas serão exibidas.
const divCaps = document.querySelector('.itens');

// Variável que controla qual conjunto de cápsulas será exibido.
// ask = 0 -> Exibe cápsulas abertas.
// ask = 1 -> Exibe cápsulas fechadas.
let ask = 0;

// Chama a função `createAll` para inicializar a interface.
createAll();

// Adiciona evento ao botão "abertos".
openedBtt.addEventListener("click", () => {
    ask = 0; // Define que queremos exibir cápsulas abertas.
    console.log(ask); // Loga o valor atual de `ask`.
    divCaps.replaceChildren(); // Remove os elementos atuais da interface.
    createAll(); // Atualiza a interface com os novos dados.
});

// Adiciona evento ao botão "fechados".
closedbtt.addEventListener("click", () => {
    ask = 1; // Define que queremos exibir cápsulas fechadas.
    console.log(ask); // Loga o valor atual de `ask`.
    divCaps.replaceChildren(); // Remove os elementos atuais da interface.
    createAll(); // Atualiza a interface com os novos dados.
});
