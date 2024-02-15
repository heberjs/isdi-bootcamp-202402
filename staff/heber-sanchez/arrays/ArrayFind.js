delete Array.prototype.find;

function find(array, callback) {
  debugger;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) return array[i];
  }
}

const array1 = [5, 12, 8, 130, 44];

const found = find(array1, (element) => element > 120);

console.log(found);
// Expected output: 130
