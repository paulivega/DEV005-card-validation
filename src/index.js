//import validator from './validator.js';
//console.log(validator);





function validar() {
    let cardNumber = document.getElementById("cardnumber").value;
    console.log('cardNumber=')
    console.log(cardNumber)
    const arrayCard = cardNumber.split('');
    console.log('arrayCard=')
    console.log(arrayCard)
    const reverseCard = arrayCard.reverse();
    console.log('reverseCard='+reverseCard)
    console.log('cardNumber='+cardNumber)
    let pairs = [];
    for (let i = 1; i < reverseCard.length; i = i + 2) {
        pairs.push([i])
    }
    console.log('pairs='+pairs)
    alert("Presionaste validar")
    //alert("cardnumber; " + arrayCard + " reverse:" + arrayReverse +" pairs "+ pairs)
}

document.getElementById("validate").addEventListener("click", validar)





//let validar= null;
 //document.getElementById("validate").addEventListener('click',function(){
 //   alert('Presionaste el botón validar' + cardNumber)
//})

//let cardNumber = document.getElementById("cardnumber").value;

//function a(){
  //  alert("Presionaste boton validar");



//console.log(validator);

