function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var arrMul=[];
  var i=0;
  while(i<=10){
    arrMul[i]=i*6;
    i++;
  }
  return arrMul;
}

module.exports = tablaDelSeis;
