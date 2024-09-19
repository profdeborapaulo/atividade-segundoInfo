// Primeiro Passo: Criar um array para armazenar as cartas
const cartas = [];

// Criar uma função para adicionar os cartas
function addCarta() {

    let nomeCarta = document.getElementById('nome-carta').value;
    let precoCarta = document.getElementById('resenha-carta').value;
    
    // Verificar se os campos estão preenchidos
    if (nomeCarta && precoCarta) {
        let carta = {
            nome: nomeCarta,
            preco: precoCarta
        };
        // Adicionar a carta dentro do array usando o método push()
        cartas.push(carta);
        // Atualizar a lista de cartas e mostrar:
        displayCartas();
        // Limpar os campos de entrada
        document.getElementById('nome-carta').value = '';
        document.getElementById('resenha-carta').value = '';
    }
}

// Criar uma nova função para exibir as cartas na tabela
function displayCartas() {
    const listaCartas = document.getElementById('lista-cartas');
    listaCartas.innerHTML = '';

    cartas.forEach(function(carta) {
        const row = listaCartas.insertRow();

        const cell1 = row.insertCell(0);
        cell1.textContent = carta.nome;

        const cell2 = row.insertCell(1);
        cell2.textContent = carta.preco;
    });
}

// Capturar os dados do formulário de cadastro
const formCarta = document.getElementById('carta-form');

// Botão para submeter os dados do formulário. O addEventListener é um escutador de evento
formCarta.addEventListener('submit', function(e){
    console.log("teste")
    e.preventDefault(); // Essa ação irá evitar que a página seja recarregada automaticamente.
    addCarta(); 
});