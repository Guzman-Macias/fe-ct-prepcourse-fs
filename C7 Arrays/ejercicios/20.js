function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var numero=array[0];
  var booleanoRes=true;
  array.forEach(element => {
    if (element == numero){
      booleanoRes=true;
    }
    else {
      booleanoRes= false;
    }
  });
  return booleanoRes;
}
module.exports = todosIguales;
