function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  par=num%2;
  if (par>=1){
    return false;
  }else{
    return true;
  }
}

module.exports = esPar;
