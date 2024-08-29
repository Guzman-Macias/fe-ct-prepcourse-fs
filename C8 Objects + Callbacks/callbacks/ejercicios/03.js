function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:

  return cb(num1,num2);
}

function cb(num1, num2){
  var suma = num1+num2;
  return suma;
}

module.exports = operacionMatematica;
