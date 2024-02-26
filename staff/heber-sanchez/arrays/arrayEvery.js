var testingTools = require("./testing-tools");
delete Array.prototype.every;

function every(array, callback) {
  if (callback instanceof Function === false)
    throw new TypeError(callback + " is not a function");

  for (let i = 0; i < array.length; i++)
    if (callback(array[i]) === false) return false;

  return true;
}

{
  console.log("CASE 1: true case");

  function lessThan(currentValue) {
    return currentValue < 40;
  }

  var arr1 = [24, 32, 35, 12];

  var result = every(arr1, lessThan);

  var copyArr1 = [24, 32, 35, 12];

  console.assert(result === true, true);

  testingTools.arrAssertTesting(arr1, copyArr1, copyArr1);
}

{
  console.log("CASE 2 - false case");

  function lessThan(currentValue) {
    return currentValue < 40;
  }

  var arr2 = [24, 39, 45, 12];

  var result2 = every(arr2, lessThan);

  var copyArr2 = [24, 55, 45, 12];

  console.assert(result2 === false, false);

  testingTools.arrAssertTesting(arr2, copyArr2, copyArr2);
}
{
  console.log("CASE: 3 - error case undefined");

  var array = [23, 43, 54];
  try {
    every(array);
  } catch (error) {
    console.assert(error.name === "TypeError", "name");
    console.assert(error.message === "undefined is not a function", "message");
  }
}

{
  console.log("CASE: 4 - error case object");

  var array = [23, 43, 54];
  // every(array, {});
  try {
    every(array, {});
  } catch (error) {
    console.assert(error.name === "TypeError", "name");
    console.assert(
      error.message === "[object Object] is not a function",
      "message"
    );
  }
}
