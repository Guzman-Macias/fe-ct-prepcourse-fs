function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  contador=0;

  for(var i = 0; i<numeros.length; i++){
    for(var n=0; n< numeros.length;n++){
      if(numeros[i]===numeros[n]){
        contador ++;
      }
    }
    if(contador === 2)return numeros[i];
    else contador =0;
  }
}


module.exports = encontrarElementoRepetido;