delete Array.prototype.from;

function from(string, mapFrom) {
  var newArray = [];

  for (let i = 0; i < string.length; i++)
    if (arguments.length < 2) newArray[i] = string[i];
    else if (typeof mapFrom !== "function")
      throw new TypeError(mapFrom + " is not a function");
    else newArray[i] = mapFrom(string[i]);

  return newArray;
}
{
  console.log("CASE 1: string to array");

  var string = "foo";

  var arrFrom = from(string);

  var expectedArray = ["f", "o", "o"];

  arrAssertTesting(expectedArray, arrFrom, expectedArray);
}
{
  console.log("CASE 2: numbers to functions array");

  var nums = [1, 2, 3];

  function sum(elem) {
    return elem + elem;
  }
  var resultArr = from(nums, sum);
  // Expected output: Array [2, 4, 6];

  var expectedArray = [2, 4, 6];

  var copyNums = [1, 2, 3];

  arrAssertTesting(expectedArray, resultArr, expectedArray);
  /*testing original arr */
  arrAssertTesting(nums, copyNums, copyNums);
}

{
  console.log("CASE 3: error");
  var string = "foo";

  try {
    from(string, {});
  } catch (error) {
    console.assert(error.name === "TypeError", "name");
    console.assert(
      error.message === "[object Object] is not a function",
      "message"
    );
  }
}
/* testing functions */
function arrAssertTesting(originArr, callbackArray, expectedResult) {
  console.assert(
    originArr.length === callbackArray.length,
    expectedResult.length
  );

  for (var i = 0; i < originArr.length; i++) {
    console.assert(originArr[i] === callbackArray[i], expectedResult[i]);
  }
}
