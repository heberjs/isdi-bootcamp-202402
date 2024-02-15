delete Array.prototype.reduce;

function reduce(array, callback, initialValue) {
  if (arguments.length > 2) {
    var acc = initialValue;
    for (let i = 0; i < array.length; i++) {
      acc = callback(acc, array[i], i, array);
    }
  } else {
    var acc = array[0];
    for (let i = 1; i < array.length; i++) {
      acc = callback(acc, array[i], i, array);
    }
  }

  return acc;
}

console.log("CASE 1");
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 10;

const sumWithInitial = reduce(
  array1,
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

console.log("CASE 2");
const array2 = [10, 5, 3, 2];

const substraction = reduce(
  array2,
  (accumulator, currentValue) => accumulator - currentValue
);
console.log(substraction);
