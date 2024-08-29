function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var newArray = [];
  for (var i =0; i< array.length;i++){
    newArray[i]=array[i]*i;
  }
  return newArray;
}

module.exports = multiplicarElementosPorIndice;
