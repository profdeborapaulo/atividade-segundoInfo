const avaliacoes= [];


function addAvaliacao() {
    let resenha = document.getElementById('resenhaR').value;
    let usuario = document.getElementById('usuarioU').value;


    if (resenha && usuario) {
        let avaliacao = {
            resenhaA: resenha,
            usuarioO: usuario
        };

        avaliacoes.push(avaliacao);

        displayAvaliacoes();

        document.getElementById('resenhaR').value = '';
        document.getElementById('usuarioU').value = '';
    }
}


function displayAvaliacoes() {
    const listaAvaliacoes = document.getElementById('lista-avaliacao');
    listaAvaliacoes.innerHTML = '';
    
    avaliacoes.forEach(function (Avaliacao) {
        const row = listaAvaliacoes.insertRow();

        const cell1 = row.insertCell(0);
        cell1.textContent = Avaliacao.usuarioO;

        const cell2= row.insertCell(1);
        cell2.textContent = Avaliacao.resenhaA;
    });  
}


const formAvaliacao = document.getElementById('avaliacao-form');

formAvaliacao.addEventListener('submit', function (e) {
    e.preventDefault(); 
    addAvaliacao();
}) 