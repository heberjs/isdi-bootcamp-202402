delete Array.prototype.indexOf;

function arrIndexOf(array, searchElement, fromIndex) {
  if ((fromIndex < array.length && fromIndex >= 0) || fromIndex === undefined) {
    var fromIndex = fromIndex ? fromIndex : 0;
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else if (fromIndex < 0) {
    for (var i = array.length + fromIndex; i < array.length; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else if (fromIndex > array.length) {
    return -1;
  } else {
    return -1;
  }
}

{
  console.log("CASE 1: start undefined index, sanchez = 2");

  var fullName = ["heber", "joaquin", "sanchez", "orquera"];

  var callback = arrIndexOf(fullName, "sanchez");

  var expectedResult = 2;

  var copyFullName = ["heber", "joaquin", "sanchez", "orquera"];

  console.assert(callback === expectedResult);

  arrAssertTesting(fullName, copyFullName, copyFullName);
}
{
  console.log("CASE: 2 - with fromIndex");

  var numbers = [2, 12, 32, 231, 241, 643];

  var callback = arrIndexOf(numbers, 241, 2);

  var expectedResult = 4;

  var copyNumbers = [2, 12, 32, 231, 241, 643];

  console.assert(callback === expectedResult);

  arrAssertTesting(numbers, copyNumbers, copyNumbers);
}

{
  console.log("CASE 3: negative index");

  var numbers = [234, 321, 122, 432, 332, 212, 12];

  var callback = arrIndexOf(numbers, 432, -5);

  var expectedResult = 3;

  var copyNumbers = [234, 321, 122, 432, 332, 212, 12];

  console.assert(callback === expectedResult);
  arrAssertTesting(numbers, copyNumbers, copyNumbers);
}

/* testing assert */

function arrAssertTesting(originArr, callbackArray, expectedResult) {
  console.assert(
    originArr.length === callbackArray.length,
    expectedResult.length
  );

  for (var i = 0; i < originArr.length; i++) {
    console.assert(originArr[i] === callbackArray[i], expectedResult[i]);
  }
}
