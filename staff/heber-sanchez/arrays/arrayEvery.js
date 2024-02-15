delete Array.prototype.every;

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      return false;
    }
  }

  return true;
}

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [];

console.log(every(array1, isBelowThreshold));
// Expected output: true
