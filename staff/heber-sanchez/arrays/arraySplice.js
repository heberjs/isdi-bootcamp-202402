delete Array.prototype.splice;

function splice(array, start, deleteCount, ...element) {
  var newArray = [];
  start > -1 ? start : start + array.length;
  //indice start positivo
  if (arguments.length < 3 || deleteCount > start) {
    for (var i = start; i < array.length; i++) {
      newArray[newArray.length] = array[i];
    }
    array.length -= array.length - start;
  }
  if (deleteCount > 0) {
    for (let i = start; i < start + deleteCount; i++) {
      newArray[newArray.length] = array[i];
      array[i + Element.length] = array[i + deleteCount];
    }
    array.length = array.length - deleteCount;
  } else if (arguments > 4) {
  }
  return newArray;
}

console.log("CASE 1");

const nums = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(nums);
console.log(splice(nums, 4, 3));
console.log(nums);
console.log("CASE 2");
const months = ["Jan", "March", "April", "June"];
splice(months, 1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

splice(months, 4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
