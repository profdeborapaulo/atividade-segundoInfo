
//carrossel
let indice = 0;

function mover(direcao) {
  const carrosselImagens = document.querySelector('.carrossel-imagens');
  const totalImagens = document.querySelectorAll('.carrossel-imagens img').length;
  indice += direcao;

  if (indice < 0) {
    indice = totalImagens - 1;
  } else if (indice >= totalImagens) {
    indice = 0;
  }


  carrosselImagens.style.transform = `translateX(${-indice * 100}vw)`; 
}

//navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


//formulario
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
  });
});

