function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  num=0;
  var newArray = [];
  for(var i = 0; i< array.length; i++){
    if (array[i]%2===0){
      newArray[num]=array[i];
      num++;
    }
  }
  return newArray;
}

module.exports = filtrarNumerosPares;
