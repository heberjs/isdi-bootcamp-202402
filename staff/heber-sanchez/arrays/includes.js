delete Array.prototype.includes;

function includes(array, valueToFind, fromIndex) {
  if (fromIndex >= array[array.length]) {
    return false;
  } else if (fromIndex < array.length && fromIndex > 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === valueToFind) {
        return true;
      }
    }
    return false;
  } else if (fromIndex < 0 || fromIndex === undefined) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valueToFind) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
}

var array = [1, "boca", "pelo", "cara", "rodilla", "nariz"];

var search = includes(array, "pelo", -3);

console.log(search);

var array = [1, "boca", "pelo", "cara", "rodilla", "nariz"];

var search = includes(array, "pelo", -3);

console.log(search);
