function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var newArray = [];
   var n=0;
   for(var i =0; i< arrayOfStrings.length; i++){
      var letra=arrayOfStrings[i].split("");
      if(letra[0]==="a"||letra[0]==="A"){
         newArray[n]=arrayOfStrings[i];
         n++;
      }
   }
   return newArray;
}

module.exports = filter;
