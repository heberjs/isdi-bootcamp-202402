delete Array.prototype.filter;

function filter(array, callback) {
  debugger;
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = filter(words, (word) => word.length > 6);

console.log(result);
