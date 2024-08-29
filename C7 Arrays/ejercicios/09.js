function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:¨
   var mayor =0;
   var min = 1;

   if (array.length === 0){
      return undefined;
   }

   if(array.length === 1){
      return array[0];
   }
   for(var i = 0; i<array.length;i++){
      if (mayor < array[i]){
         mayor = array[i];
      }
   }
   return Math.round(Math.random()*(mayor-min)+min);
}

module.exports = obtenerElementoAleatorio;
