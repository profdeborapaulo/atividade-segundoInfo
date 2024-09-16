const notas = [];

function addNota() {
    let nomeAluno = document.getElementById('nome-produto').value;
    let nota = parseFloat(document.getElementById('preco-produto').value);

    if (nomeAluno && !isNaN(nota)) {
        let notaValor = {
            nome: nomeAluno,
            preco: nota
        };

        notas.push(notaValor);
        displayNotas();

        document.getElementById('nome-produto').value = '';
        document.getElementById('preco-produto').value = '';
    }
}

function displayNotas() {
    const listaNotas = document.getElementById('lista-produto');
    listaNotas.innerHTML = '';

    notas.forEach(function(notaValor) {
        const row = listaNotas.insertRow();
        const cell1 = row.insertCell(0);
        cell1.textContent = notaValor.nome;
        const cell2 = row.insertCell(1);
        cell2.textContent = notaValor.preco;
    });
}

document.getElementById('produto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addNota();
});
