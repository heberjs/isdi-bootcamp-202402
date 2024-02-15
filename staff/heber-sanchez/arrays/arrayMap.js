delete Array.prototype.map;

function map(array, mapFunct) {
  var newArray = [];

  if (arguments.length < 2) {
    throw new Error("Error");
  } else {
    for (let i = 0; i < array.length; i++) {
      newArray[i] = mapFunct(array[i], i, array);
    }

    console.log(newArray);
  }
}

var numbers = [1, 5, 10, 15];
var doubles = map(numbers, function (x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = map(numbers, function (num) {
  return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

var test = map(numbers);
