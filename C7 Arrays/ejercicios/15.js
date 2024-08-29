function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var mayor=-10;
  if (array.length===0){
    return 0;
  }
  for(var i =0; i<array.length;i++)
    if(mayor<array[i]){
      mayor=array[i];
    }
  var number = array.findIndex((numero)=> numero === mayor);
  return number;
}

module.exports = encontrarIndiceMayor;
