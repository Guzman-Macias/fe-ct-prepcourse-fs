/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var NewArr=[];
  var keyArr = Object.keys(objeto);
  for(var i =0; i<keyArr.length; i++){
    var n=0;
    var ArrInt = [];
      ArrInt[n]=keyArr[i];
      n++;
      ArrInt[n]=objeto[keyArr[i]];
      NewArr[i]=ArrInt;
  }
  return NewArr;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var newObj={};
  var Array1 = string.split("");
  var OrdArray=Array1.sort();
  var i=0;
  while(i<OrdArray.length){
    var cont = 0;
    for(var n=0; n<OrdArray.length; n++){
      if(OrdArray[i]==OrdArray[n]){
        cont ++;
      }
    }
    newObj[OrdArray[i]]=cont;
    i=i+cont;
  }
  return newObj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var mayus= string.toUpperCase();
  var Array2=mayus.split("");
  var Array1 = string.split("");
  var newArr=[];
  for(var i =0; i< Array1.length;i++){
    if (Array1[i]==Array2[i]){
      newArr.push(Array1[i]);
    }
  }
  for(var i =0; i< Array1.length;i++){
    if (Array1[i]!=Array2[i]){
      newArr.push(Array1[i]);
    }
  }
  var newArrray=newArr.join("");
  return newArrray;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var separacion = frase.split(" ");
  var arrRetur=[];
  for(var i =0; i<separacion.length; i++){
    var arr=[];
    var retorno=[];
    arr= separacion[i].split("");
    retorno=arr.reverse();
    arrRetur.push(retorno.join(""));
  }
  return arrRetur.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var newString= numero.toString();
  var array1=newString.split("");
  var cont=0;
  var n=array1.length;
  console.log(array1);
  for(var i =1; i<= array1.length; i++){
      if(array1[i-1]===array1[n-i]){
        cont++;
      }
    }
  if(cont === array1.length){
    return 'Es capicua';
  }
  else return 'No es capicua';

}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var deleteStr = string.split("");
  var newStrDel=[];
  var n=0;
  for(var i =0; i<deleteStr.length; i++){
    if(deleteStr[i]==='a'||deleteStr[i]==='b'|| deleteStr[i]==='c'){
      continue;
    }else{
      newStrDel[n]=deleteStr[i];
      n++;
    }
  }
  return newStrDel.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var contarArr=[];
  var newArrfin=[];
  var rep=0;
  var numSum=0;

  for(var i=0; i< arrayOfStrings.length;i++){
    contarArr[i]=arrayOfStrings[i].length;
  }
  var arrMenMay=contarArr.sort();

  for(var i =0; i< arrayOfStrings.length;i++ ){
    for(var n=0; n<arrayOfStrings.length; n++){
      if(arrMenMay[i]==arrayOfStrings[n].length){
        if(newArrfin[n]==arrayOfStrings[n]){
          break
        }
        newArrfin[rep]=arrayOfStrings[n];
        rep++;
      }
    }
  }
  return newArrfin;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var ArrNumIgual=[];
  
  for(var i =0; i<array1.length; i++){
    for(var n=0; n<array2.length; n++){
      if(array1[i]==array2[n]){
        ArrNumIgual.push(array1[i]);
        break;
      }
    }
  }
  return ArrNumIgual;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
