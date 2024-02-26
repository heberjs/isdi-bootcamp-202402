delete Array.prototype.filter;

function filter(array, callback) {
  if (callback instanceof Function === false)
    throw new TypeError(callback + " is not a function");

  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}

{
  console.log("CASE 1: words length");
  var words = ["spray", "elite", "exuberant", "destruction", "present"];

  function longWords(word) {
    return word.length > 6;
  }
  var result = filter(words, longWords);

  var arrayVerified = ["spray", "elite", "exuberant", "destruction", "present"];

  var expectedResult = ["exuberant", "destruction", "present"];

  /* verify if principal array is not mutated and verify if length is the same */
  arrAssertTesting(words, arrayVerified, arrayVerified);

  /* verify if new array matches and length with expected array*/
  arrAssertTesting(result, expectedResult, expectedResult);
}
{
  console.log("CASE 2: numbers > 10");
  var numbers = [12, 5, 8, 130, 44];

  function isBigEnough(value) {
    return value >= 10;
  }

  var arrayVerified = [12, 5, 8, 130, 44];
  var filtered = filter(numbers, isBigEnough);
  var expectedResult = [12, 130, 44];

  arrAssertTesting(numbers, arrayVerified, arrayVerified);
  arrAssertTesting(filtered, expectedResult, expectedResult);
}
{
  console.log("CASE 3: error - TypeError - undefined");

  try {
    filter(numbers, 123);
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
