function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var contVer=0;
  var newArray = string.split("");
  var invertido=[];
  for(var i = 0; i< newArray.length;i++){
    invertido[i]=newArray[newArray.length-i-1];
  }

  for( var i = 0; i< newArray.length;i++){
    if(invertido[i]===newArray[i]){
      contVer++;
    }
  }

  if(contVer===newArray.length){
    return true;
  }
  else {
    return false;
  }

}

module.exports = esPalindromo;