function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  var decimal=num-Math.floor(num);
  if (num === 0 || decimal === 0){
    return true;
  }else if(decimal < 1 || decimal > -1){
    return false;
  }else{
    return true;
  } 
}

module.exports = esEntero;
