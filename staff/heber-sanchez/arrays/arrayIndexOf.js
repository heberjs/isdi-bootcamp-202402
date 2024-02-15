delete Array.prototype.indexOf;

function arrIndexOf(array, searchElement, fromIndex) {
  debugger;

  if (fromIndex < array.length && fromIndex >= 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else if (fromIndex < 0) {
    for (let i = array.length + fromIndex; i < array.length; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else if (fromIndex > array.length) {
    return -1;
  } else if (fromIndex === undefined) {
    fromIndex = 0;
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else {
    return -1;
  }
}

const fullName = ["heber", "joaquin", "sanchez", "orquera"];

var callback = arrIndexOf(fullName, "sanchez");

console.log(callback);
