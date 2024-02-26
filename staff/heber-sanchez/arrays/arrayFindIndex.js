delete Array.prototype.findIndex;

function findIndex(array, callback) {
  if (callback instanceof Function === false)
    throw new TypeError(callback + " is not a function");

  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i)) return i;
  }
  return -1;
}
{
  console.log("CASE 1");

  var array1 = [5, 12, 8, 130, 44];

  function isLargeNumber(element) {
    return element > 6;
  }

  var result = findIndex(array1, isLargeNumber);

  var copyArr1 = [5, 12, 8, 130, 44];

  console.assert(result === 1);

  arrAssertTesting(array1, copyArr1, copyArr1);
}

{
  console.log("CASE 2: error - undefined");

  var array = [2, 3];
  try {
    findIndex(array);
  } catch (error) {
    console.assert(error.name === "TypeError", "name");
    console.assert(error.message === "undefined is not a function", "message");
  }
}

/* asserting function*/
function arrAssertTesting(originArr, callbackArray, expectedResult) {
  console.assert(
    originArr.length === callbackArray.length,
    expectedResult.length
  );

  for (var i = 0; i < originArr.length; i++) {
    console.assert(originArr[i] === callbackArray[i], expectedResult[i]);
  }
}
