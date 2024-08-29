function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var total=0;
  for(var i =0; i<arrayOfNums.length; i++){
    total=total+arrayOfNums[i];
  }
  return total;
}
module.exports = agregarNumeros;
