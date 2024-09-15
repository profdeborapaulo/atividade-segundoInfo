
document.getElementById('anuncio-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const artista = document.getElementById('artista').value;
    const motivo = document.getElementById('motivo').value;
    const data = document.getElementById('data').value;
    const preco = document.getElementById('preco').value;

    localStorage.setItem('anuncioData', JSON.stringify({ artista, motivo, data, preco }));

    window.location.href = 'homevendedor.html';
});