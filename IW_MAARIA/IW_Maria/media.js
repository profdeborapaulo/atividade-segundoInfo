const produtos = [];

function addProduto() {
    let nomeAluno = document.getElementById('nomeAluno').value;
    let notas = Array.from(document.querySelectorAll('.nota')).map(input => parseFloat(input.value));
    
    if (nomeAluno && notas.every(nota => !isNaN(nota))) {
        let soma = notas.reduce((acc, nota) => acc + nota, 0);
        let media = soma / notas.length;

        let produto = {
            nome: nomeAluno,
            preco: media
        };

        produtos.push(produto);
        displayProdutos();

        document.getElementById('nomeAluno').value = '';
        document.querySelectorAll('.nota').forEach(input => input.value = '');
    }
}

function displayProdutos() {
    const listaProdutos = document.getElementById('lista-media');
    listaProdutos.innerHTML = '';

    produtos.forEach(function(produto) {
        const row = listaProdutos.insertRow();
        const cell1 = row.insertCell(0);
        cell1.textContent = produto.nome;
        const cell2 = row.insertCell(1);
        cell2.textContent = produto.preco.toFixed(2);
    });
}

document.getElementById('nota-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addProduto();
});

document.getElementById('add-nota').addEventListener('click', function() {
    const notasContainer = document.getElementById('notas-container');
    const newNotaInput = document.createElement('input');
    newNotaInput.type = 'number';
    newNotaInput.className = 'nota';
    newNotaInput.placeholder = 'Nota';
    notasContainer.appendChild(newNotaInput);
});
