document.getElementById('anuncio-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const artista = document.getElementById('artista').value;
    const motivo = document.getElementById('motivo').value;
    const data = document.getElementById('data').value;
    const preco = document.getElementById('preco').value;

    
    let anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];
    
    
    anuncios.push({ artista, motivo, data, preco });

    
    localStorage.setItem('anuncios', JSON.stringify(anuncios));

    window.location.href = 'homevendedor.html';
});
