delete Array.prototype.slice;

function slice(array, indexStart, indexEnd) {
  var newArray = [];

  if (arguments.length < 3 && indexStart > 0 && indexStart < array.length) {
    for (let i = indexStart; i < array.length; i++) {
      newArray[newArray.length] = array[i];
    }
  } else if (arguments.length < 3 && indexStart < 0) {
    for (let i = indexStart + array.length; i < array.length; i++) {
      newArray[newArray.length] = array[i];
    }
  } else if (indexStart > -1 && indexEnd < 0) {
    for (let i = indexStart; i < indexEnd + array.length; i++) {
      newArray[newArray.length] = array[i];
    }
  } else if (indexStart > -1 && indexEnd > array.length)
    for (let i = indexStart; i < indexEnd; i++) {
      newArray[newArray.length] = array[i];
    }
  else if (arguments.length < 2) {
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
  }

  return newArray;
}

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log("CASE 1");
console.log(slice(animals, 2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log("CASE 2");
console.log(slice(animals, 2, 4));
// Expected output: Array ["camel", "duck"]

console.log("CASE 3");
console.log(slice(animals, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log("CASE 4");
console.log(slice(animals, -2));
// // Expected output: Array ["duck", "elephant"]

console.log("CASE 5");
console.log(slice(animals, 2, -1));
// Expected output: Array ["camel", "duck"]

console.log("CASE 6");
console.log(slice(animals));
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
