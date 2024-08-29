function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  //console.log(arr.length);
  //console.log(typeof arr);
  if (typeof arr == "string"){
    return false
  }
  else if (arr.length>2){
    return true;
  }else return false;
}

module.exports = esArrayNoVacio;