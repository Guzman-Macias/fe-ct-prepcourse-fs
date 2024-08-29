function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var newArray = texto.split("");
  var invertido=[];
  for(var i = 0; i< newArray.length;i++){
    invertido[i]=newArray[newArray.length-i-1];
  }
  return invertido.join("");
}

module.exports = invertirTexto;
