function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var split1=str1.split("");
  var split2=str2.split("");
  var split3=str3.split("");
  var newArray =[];
  var constante=0;

  var cont1=str1.length;
  var cont2=str2.length;
  var cont3=str3.length;
  mayor=0;
  if (mayor < cont1){
    mayor=cont1;
  }
  if (mayor < cont2){
    mayor=cont2;
  }
  if (mayor < cont3){
      mayor=cont3;
  }

  for(var i= 0; i< mayor; i++){
    if(split1!=""){
      newArray[constante]=split1[i];
      constante++;
    }
    if(split2!=""){
      newArray[constante]=split2[i];
      constante++;
    }
    if(split3!=""){
    newArray[constante]=split3[i];
    constante++;
    }
  }
  return newArray.join("");
  
}

module.exports = combine;