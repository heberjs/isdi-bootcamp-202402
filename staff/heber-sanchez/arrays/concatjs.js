delete Array.prototype.concat;

//la funcion concat a traves de una reestructuracion de array toma x arrays "...array"
function concatjs(...array) {
  //ahora queremos que esos arrays sean introducidos en un solo array

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (
      typeof array[i] !== "string" &&
      typeof array[i] !== "boolean" &&
      typeof array[i] !== "number"
    ) {
      for (let j = 0; j < array[i].length; j++) {
        newArray[newArray.length] = array[i][j];
      }
    } else {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}

var array1 = ["heber", "juan", "pedro", "jordi"];

var array2 = ["camila", "irene", "flora"];
var array3 = "hola";

var callBack = concatjs(array1, array2, array3);
console.log(callBack);
