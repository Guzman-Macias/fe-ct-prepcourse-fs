function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var num=0;
   var letras1 = str1.length;
   var letras2 = str2.length;
   var str1min=str1.toLowerCase();
   var str2min=str2.toLowerCase();
   array1=str1min.split("");
   array2=str2min.split("");
   if (letras1 === letras2){
      for(var i =0; i< letras1;i++){
         array2.forEach(element => {
            if (element== array1[i]){
               num++;
            }
         });
       }

       if ( num >= letras1){
         return true;
       }else return false;
   }
   else return false;

}

module.exports = esAnagrama;
