delete Array.prototype.with;

function arrayWith(array, index, value) {
  var newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }

  newArray[index] = value;

  return newArray;
}

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arrayWith(arr, 2, 6)); // [1, 2, 6, 4, 5]
console.log(arr);

// console.log(with(arr)); // [1, 2, 3, 4, 5]
