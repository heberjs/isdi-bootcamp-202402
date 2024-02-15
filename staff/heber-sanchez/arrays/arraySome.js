delete Array.prototype.some;

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) return true;
  }

  return false;
}

var array = [1, 7, 3, 9, 2];

// Checks whether an element is even

console.log(some(array, (element) => element % 2 === 0));
// Expected output: true
