document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const sinopse = document.getElementById('sinopse').value;
  
    alert(`Sua novela foi criada!\n\nTítulo: ${titulo}\nGênero: ${genero}\nSinopse: ${sinopse}`);
  });
  