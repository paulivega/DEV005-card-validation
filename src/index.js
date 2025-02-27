import validator from './validator.js';

//Elementos del DOM todos son const
const cardNumber = document.getElementById('inputCard');
const btnValidation = document.getElementById('btnValidation');

const viewMaskifyCard = document.getElementById('viewMaskifyCard');
const validCard = document.getElementById('validCard');
const maskifyNumber = document.getElementById('maskifyNumber')
const validCardSection = document.getElementById('validCardSection')



// Funciones que interactúan con el DOM
function emptyInput() {
  const emptyCard = cardNumber.value.length === 0;
  if (emptyCard) {
    alert('Ingresa un número de tarjeta nuevamente')
  }
  return emptyCard
}
function viewValidation() {
  const cardNumber = document.getElementById('inputCard').value
  const validar = validator.isValid(cardNumber);
  if (validar) {
    validCard.innerHTML = 'Tarjeta Válida'
    validCardSection.style.border ='3px solid green'
  } else {
    validCard.innerHTML = 'Tarjeta Inválida. Ingresa nuevamente.'
    validCardSection.style.border ='3px solid red'
  }
}
function viewCard() {
  const cardNumber = document.getElementById('inputCard').value
  maskifyNumber.innerHTML = validator.maskify(cardNumber);
}
// funcion ocultar el input y aparecer validación tarjeta de crédito
function showValidation() {
  validCardSection.style.display = 'block'
  viewMaskifyCard.style.display = 'block'

}

// Eventos del DOM

btnValidation.addEventListener('click', clickbtn);
function clickbtn() {
  const isEmpty = emptyInput();
  if (!isEmpty) {
    viewValidation();
    viewCard(); 
    showValidation();
  }


}