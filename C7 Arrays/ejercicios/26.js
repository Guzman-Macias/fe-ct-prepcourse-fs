function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var multiplo=0;
  for(var i =0; i<secuencia.length;i++){
    if(n/secuencia[i]===1){
      multiplo= secuencia[i];
      break
    }
  }
  if (multiplo===0){
    return undefined;
  }else return multiplo;
}

module.exports = encontrarPrimerMultiploDeN;