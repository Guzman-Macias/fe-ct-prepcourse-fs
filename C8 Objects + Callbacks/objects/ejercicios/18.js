function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

  var arreglo = objetoUsuario.amigos;
  arreglo.push(nuevoAmigo);
  objetoUsuario.amigos=arreglo;
  return objetoUsuario;

}

module.exports = agregarAmigo;
