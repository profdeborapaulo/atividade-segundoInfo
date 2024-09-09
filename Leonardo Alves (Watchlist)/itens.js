const itens = [];

// Função para adicionar os itens
function addItem() {      
    let nomeItem = document.getElementById('nome-item').value;
    let infoItem = document.getElementById('info-item').value;    
 
    if (nomeItem && infoItem) {
        let item = {
            nome: nomeItem,
            info: infoItem
        };

        itens.push(item);

        displayItens();

        document.getElementById('nome-item').value = '';
        document.getElementById('info-item').value = '';
    }
}
 
// Função para mostrar os itens
function displayItens() {
    const listaItens = document.getElementById('lista-item');
    listaItens.innerHTML = '';
 
    itens.forEach(function(item, index) {
        const row = listaItens.insertRow();
       
        const cell1 = row.insertCell(0);
        cell1.textContent = item.nome;

        const cell2 = row.insertCell(1);
        cell2.textContent = item.info;  

        const cell3 = row.insertCell(2);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Feito!';
        deleteButton.onclick = function() {
            excluirItem(index);
        };
        cell3.appendChild(deleteButton);
    });
}

function excluirItem(index) {
    itens.splice(index, 1);
    displayItens();
}

// Função para ordenar produtos por nome
function ordenarItens() {
    itens.sort(function(a, b) {
        if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
            return -1;
        }
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    // Exibe a lista ordenada
    displayItens(); 
}

const formItem = document.getElementById('produto-form');

formItem.addEventListener('submit', function(e){
    e.preventDefault(); 
    addItem(); 
});

// Adicionar o botão de ordenação
document.getElementById('ordenar-btn').addEventListener('click', ordenarItens);
