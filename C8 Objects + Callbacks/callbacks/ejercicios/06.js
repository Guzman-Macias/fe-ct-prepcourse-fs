function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var newAarray=[];
  for(var i =0; i< array.length; i++){
    newAarray[i]=cb(array[i]);
  }
  return newAarray;
}
function cb (var1){
  return var1*var1;
}
module.exports = map;
