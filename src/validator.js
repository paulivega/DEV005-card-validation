
const validator = {
  isValid: function (number) {
    
    //separar valor en parttes y se convierte en un arreglo
    const arrayCard = number.split("");
    //doy vuelta el arreglo
    const reverseCard = arrayCard.reverse();
    //agrego los valores pares al arreglo pairs
    const pairs = [];
    for (let i = 1; i < reverseCard.length; i = i + 2) {
      pairs.push(reverseCard[i])
    }
    //agrego los valores impares del arreglo unpairs
    const unpairs = [];
    for (let i = 0; i < reverseCard.length; i = i + 2) {
      unpairs.push(reverseCard[i])
    }

    //convierto los valores unpairs a enteros, usando perseInt
    const unpairsNumbers = []; 
    for(let i = 0; i<unpairs.length; i = i+1){
      unpairsNumbers.push(parseInt(unpairs[i],10))
    }
    //sumo los valores unpairs y obtengo un el valor total de unpairs
    let totalUnpairs= 0;
    for(let i = 0; i<unpairsNumbers.length; i=i+1){
      totalUnpairs= totalUnpairs + (unpairsNumbers[i])
    } 
    //pasar valores pares a números
    const pairsNumber = [];
    for(let i = 0; i <pairs.length; i = i+1){
      pairsNumber.push(parseInt(pairs[i],10))
    }
    //multiplicar por 2 cada elemento del arreglo pairs
    const pairs2=[];
    for(let i = 0; i<pairsNumber.length; i = i+1){
      pairs2.push(pairsNumber[i]*2)
    } 
    //juntar todos los números.
    const pairsJoin =  pairs2.join("");
    //pasar pairsJoin a un array
    const pairs2array = pairsJoin.split("");
    //convertir pairs2array a número.
    const pairs2ArrayNumbers=[];
    for(let i = 0; i<pairs2array.length; i= i +1){
      pairs2ArrayNumbers.push(parseInt(pairs2array[i],10))
    }
    //sumar los valores de los pares
    let totalPairs=0;
    for(let i = 0; i<pairs2ArrayNumbers.length; i = i+1){
      totalPairs= totalPairs + (pairs2ArrayNumbers[i])
    }
    const totalCard= totalPairs + totalUnpairs;
    return totalCard %10 === 0
  },

  maskify: function(stringToMask){
    //crear variable result
    let result ;
    //crear un if para cuando es mayor a 4 se aplique maskify
    if(stringToMask.length > 4){
    //separar los últimos 4 carácteres del stringToMask
      const lastFour = stringToMask.slice(-4)
      //ocultar los carácteres
      const hideRest = '#'.repeat(stringToMask.length-4)
      // juntar todos los números de la tarjeta
      const totalCard= hideRest + lastFour 
      result = totalCard
    }else{
      result = stringToMask
    }
    return result;
    
    
  }
  
};

export default validator;
