function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  par=num%2;
  if (par>=1){
    return true;
  }else{
    return false;
  }
}

module.exports = esImpar;