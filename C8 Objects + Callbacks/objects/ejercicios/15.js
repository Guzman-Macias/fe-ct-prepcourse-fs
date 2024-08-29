function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  var parametros = Object.keys(objeto);
  for(var i =0; i<parametros.length; i++){
    if (parametros[i]== propiedad){
      return true;
    }
  }
  return false;
}

module.exports = tienePropiedad;
