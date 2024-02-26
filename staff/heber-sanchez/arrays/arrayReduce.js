delete Array.prototype.reduce;

function reduce(array, callback, initialValue) {
  if (callback instanceof Function === false)
    throw new TypeError(callback + " is not a function");
  else if (arguments.length > 2) {
    var acc = initialValue;
    for (let i = 0; i < array.length; i++) {
      acc = callback(acc, array[i], i, array);
    }
  } else {
    var acc = array[0];
    for (let i = 1; i < array.length; i++) {
      acc = callback(acc, array[i], i, array);
    }
  }

  return acc;
}

{
  console.log("CASE 1: sum of array elem");
  var array1 = [1, 2, 3, 4];
  // 0 + 1 + 2 + 3 + 4
  var initialValue = 10;

  function sum(accumulator, currentValue) {
    return accumulator + currentValue;
  }

  var sumWithInitial = reduce(array1, sum, initialValue);

  var copyArray1 = [1, 2, 3, 4];

  var expectedOutput = 20;

  console.assert(sumWithInitial === expectedOutput);

  arrAssertTesting(array1, copyArray1, copyArray1);
}
{
  console.log("CASE 2");
  var array2 = [10, 5, 3, 2];

  function subtr(accumulator, currentValue) {
    return accumulator - currentValue;
  }

  var substraction = reduce(array2, subtr);

  var copyArray2 = [10, 5, 3, 2];

  var expectedOutput = 0;

  console.assert(substraction === expectedOutput);

  arrAssertTesting(array2, copyArray2, copyArray2);
}
{
  console.log("CASE 3: error - undefined");

  var array3 = [23, 2];

  try {
    reduce(array3);
  } catch (error) {
    console.assert(error.name === "TypeError", "name");
    console.assert(error.message === "undefined is not a function", "message");
  }
}

function arrAssertTesting(originArr, callbackArray, expectedResult) {
  console.assert(
    originArr.length === callbackArray.length,
    expectedResult.length
  );

  for (var i = 0; i < originArr.length; i++) {
    console.assert(originArr[i] === callbackArray[i], expectedResult[i]);
  }
}
