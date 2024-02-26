delete Array.prototype.find;

function find(array, callback) {
  if (callback instanceof Function === false)
    throw new TypeError(callback + " is not a function");

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return array[i];
  }
}
{
  console.log("CASE 1: find first element > 120");
  const nums = [5, 12, 8, 130, 44];

  const copyOriginalArr = [5, 12, 8, 130, 44];

  const found = find(nums, (element) => element > 120);

  console.assert(found === 130, 130);

  // for (var i = 0; i < nums.length - 1; i++)
  //   console.assert(nums[i] === copyOriginalArr[i]);
  arrAssertTesting(nums, copyOriginalArr, copyOriginalArr);

  console.assert(nums.length === copyOriginalArr.length);
}

{
  console.log("CASE 2: error - number");
  var array = [2, 3];
  try {
    find(array, 3);
  } catch (error) {
    console.assert(error.name === "TypeError", "name");
    console.assert(error.message === "3 is not a function", "message");
  }
}

function arrAssertTesting(originArr, callbackArray, expectedResult) {
  console.assert(
    originArr.length === callbackArray.length,
    expectedResult.length
  );
}
