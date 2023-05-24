//! compteur de click

let counter = 0;

const compteur = document.querySelector('.numero-compteur');
const incre = document.querySelector('.incrementer');
const decre = document.querySelector('.decrementer');
const reset = document.querySelector('.reset');

function compteurColor() {
  if (counter > 0) {
    compteur.style.color = 'green';
  } else if (counter < 0) {
    compteur.style.color = 'red';
  } else {
    compteur.style.color = 'black';
  }
}

function updateCounter() {
  compteurColor();
  compteur.textContent = counter;
}

incre.addEventListener('click', function () {
  counter++;
  updateCounter();
});
decre.addEventListener('click', function () {
  counter--;
  updateCounter();
});
reset.addEventListener('click', function () {
  counter = 0;
  updateCounter();
});
