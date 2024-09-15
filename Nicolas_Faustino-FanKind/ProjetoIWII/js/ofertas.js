
document.getElementById('toggle-form-btn').addEventListener('click', function() {
    const form = document.getElementById('sectors-form');
    const isHidden = form.style.display === 'none';
    form.style.display = isHidden ? 'block' : 'none';
    this.textContent = isHidden ? 'Ocultar Opções' : 'Mostrar Opções';
});

document.getElementById('sectors-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedSector = document.querySelector('input[name="sector"]:checked').value;
    if (selectedSector === 'Arquibancada') {
        alert('Não há ingressos para este setor');
    } else {
        if (selectedSector === 'Cadeira inferior') {
            document.getElementById('cards-container').style.display = 'flex';
        } else {
            document.getElementById('cards-container').style.display = 'none';
        }
    }
});

document.getElementById('second-card').addEventListener('click', function() {
    window.location.href = 'compra.html';
});