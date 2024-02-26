delete Array.prototype.map;

function map(array, mapFunct) {
  if (mapFunct instanceof Function === false)
    throw new TypeError(mapFunct + " is not a function");

  var newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = mapFunct(array[i], i, array);
  }

  return newArray;
}

{
  console.log("CASE 1: arr *2");
  var numbers = [1, 5, 10, 15];

  function multiplicate(x) {
    return x * 2;
  }

  var doubles = map(numbers, multiplicate);

  var copyNumbers = [1, 5, 10, 15];

  var expectedResult = [2, 10, 20, 30];

  arrAssertTesting(numbers, copyNumbers, copyNumbers);

  arrAssertTesting(expectedResult, doubles, expectedResult);
}
{
  console.log("CASE 2: arr sqrt");

  var numbers = [1, 4, 9];

  function sqrtNumber(num) {
    return Math.sqrt(num);
  }

  var roots = map(numbers, sqrtNumber);

  var copyNumbers = [1, 4, 9];

  var expectedOutput = [1, 2, 3];

  arrAssertTesting(numbers, copyNumbers, copyNumbers);

  arrAssertTesting(expectedOutput, roots, expectedOutput);
}
{
  console.log("CASE 3: error undefined");

  var numbers = [2, 4, 2, 5];
  try {
    map(numbers);
  } catch (error) {
    console.assert(error.name === "TypeError", "name");
    console.assert(error.message === "undefined is not a function");
  }
}
/*assert functions */
function arrAssertTesting(originArr, callbackArray, expectedResult) {
  console.assert(
    originArr.length === callbackArray.length,
    expectedResult.length
  );

  for (var i = 0; i < originArr.length; i++) {
    console.assert(originArr[i] === callbackArray[i], expectedResult[i]);
  }
}
