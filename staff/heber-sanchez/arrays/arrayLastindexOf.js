delete Array.prototype.lastindexOf;

function lastindexOf(array, searchElement, fromIndex) {
  if (arguments.length < 3 || fromIndex >= array.length - 1) {
    for (let i = array.length - 1; i > -1; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else if (arguments < 3 || (fromIndex < 0 && fromIndex > -array.length)) {
    for (let i = fromIndex + array.length; i < array.length; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else if (fromIndex < array.length) {
    for (let i = fromIndex; i < array.length; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  }
  return -1;
}

console.log("CASE 1");
var animal = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(lastindexOf(animal, "Dodo"));
// Expected output: 3

console.log(lastindexOf(animal, "Tiger"));
// Expected output: 1

console.log("CASE 2");
console.log(lastindexOf(animal, "Penguin", 7)); //2

console.log("CASE 3");
console.log(lastindexOf(animal, "Dodo", -2));

console.log("CASE 4");
var array = [2, 5, 9, 2];
console.log(lastindexOf(array, 7)); // -1

console.log("CASE 5");
console.log(lastindexOf(array, 2, 3)); //3

console.log("CASE 6");
console.log(lastindexOf(array, 2, 2)); // 0

console.log("CASE 7");
console.log(lastindexOf(array, 2, -2)); // 0

console.log("CASE 8");
console.log(lastindexOf(array, 2, -1)); //3
