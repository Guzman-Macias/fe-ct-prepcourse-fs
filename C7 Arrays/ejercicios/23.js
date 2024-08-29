function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var newArray=[];
  for(var i=0;i<10;i++){
    newArray[i]=num+(2*(i+1));
    if ((i+1)===newArray[i]){
      return "Se interrumpió la ejecución";
    }
  }
  return newArray;
}

module.exports = breakStatement;
