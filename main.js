const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav_menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav_menu_visible');
});

/* CODIGO PARA SLIDE DE INFORMACION DE TARJETAS */

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
  muestraSlides((indice += n));
}

function posicionSlide(n) {
  muestraSlides((indice = n));
}

setInterval(function tiempo() {
  muestraSlides((indice += 1));
}, 4000);

function muestraSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mi-slider');
  let barras = document.getElementsByClassName('barra');

  if (n > slides.length) {
    indice = 1;
  }

  if (n < 1) {
    indice = slides.length();
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < barras.length; i++) {
    barras[i].className = barras[i].className.replace('active', '');
  }

  slides[indice - 1].style.display = 'block';
  barras[indice - 1].className += ' active';
}

const cuadrado = document.querySelector('.cuadrado');
const icono = document.querySelector('.icono');
const informacion = document.querySelector('.informacion');

cuadrado.addEventListener('click', () => {
  informacion.style.display = 'block';
  icono.classList.toggle('girado');
});

/* DESCRIPTION BUTTONS SERVICES */
