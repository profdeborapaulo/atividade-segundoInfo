document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-list a');
  const planetaCards = document.querySelectorAll('.planeta-card');
  
  planetaCards.forEach(card => card.style.display = 'none');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const planeta = event.target.getAttribute('data-planeta');
      const cardToShow = document.getElementById(`card-${planeta}`);
      
      planetaCards.forEach(card => card.style.display = 'none');
      
      cardToShow.style.display = 'block';
      
      blurBackground.style.display = 'block';
    });
  });

  planetaCards.forEach(card => {
    card.addEventListener('click', () => {
      const frente = card.querySelector('.planeta-card__frente');
      const verso = card.querySelector('.planeta-card__verso');
      
      if (frente.style.transform === 'rotateY(180deg)') {
        frente.style.transform = 'rotateY(0deg)';
        verso.style.transform = 'rotateY(180deg)';
      } else {
        frente.style.transform = 'rotateY(180deg)';
        verso.style.transform = 'rotateY(0deg)';
      }
    });
  });

  const blurBackground = document.createElement('div');
  blurBackground.classList.add('blur-background');
  document.body.appendChild(blurBackground);

  blurBackground.addEventListener('click', () => {
    planetaCards.forEach(card => card.style.display = 'none');
    blurBackground.style.display = 'none';
  });
});
