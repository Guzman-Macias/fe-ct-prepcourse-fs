function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  /*
  var num = array.length;
  var newArray=[];
  var dec= num-1;
  for(var i =0; i<num; i++){
    newArray[i]=array[dec];
    dec=dec-1;
  }
  return newArray;
  */
 var newArray=array.reverse();
 return newArray;

}

module.exports = invertirArray;
