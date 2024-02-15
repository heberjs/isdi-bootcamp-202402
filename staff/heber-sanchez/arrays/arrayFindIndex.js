delete Array.prototype.findIndex;

function findIndex(array, callback) {
  debugger;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) return i;
  }
  return -1;
}

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element < 2;

console.log(findIndex(array1, isLargeNumber));
// Expected output: 3
