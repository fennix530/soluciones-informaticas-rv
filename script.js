// Selecciona los botones y el contenedor del carrusel
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const container = document.querySelector('.carrusel-container');

// Mueve el carrusel hacia la izquierda
prev.addEventListener('click', () => {
  container.scrollBy({ left: -220, behavior: 'smooth' });
});

// Mueve el carrusel hacia la derecha
next.addEventListener('click', () => {
  container.scrollBy({ left: 220, behavior: 'smooth' });
});