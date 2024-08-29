function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var newArray = [];
  for(var i = 0; i< array.length;i++){
    newArray[i]= array[i].toUpperCase();
  }
  return newArray;
}

module.exports = convertirStringAMayusculas;
