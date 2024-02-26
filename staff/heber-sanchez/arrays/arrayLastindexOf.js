delete Array.prototype.lastindexOf;

function lastindexOf(array, searchElement, fromIndex) {
  if (arguments.length < 3 || fromIndex >= array.length - 1) {
    for (let i = array.length - 1; i > -1; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else if (arguments < 3 || (fromIndex < 0 && fromIndex > -array.length)) {
    for (let i = fromIndex + array.length; i < array.length; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  } else if (fromIndex < array.length) {
    for (let i = fromIndex; i < array.length; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
  }
  return -1;
}

{
  console.log("CASE 1");

  var animal = ["Dodo", "Tiger", "Penguin", "Dodo"];

  var string = "Dodo";

  var findDodo = lastindexOf(animal, string);

  var expectedOutput = 3;

  var copyAnimal = ["Dodo", "Tiger", "Penguin", "Dodo"];

  console.assert(findDodo === expectedOutput);

  arrAssertTesting(animal, copyAnimal, copyAnimal);
}
{
  console.log("CASE 2: from index > length");

  var animal = ["Dodo", "Tiger", "Penguin", "Dodo"];

  var string = "Penguin";

  var indexPenguin = lastindexOf(animal, string, 7);

  var copyAnimal = ["Dodo", "Tiger", "Penguin", "Dodo"];

  var expectedOutput = 2;

  console.assert(indexPenguin === expectedOutput);

  arrAssertTesting(animal, copyAnimal, copyAnimal);
}
{
  console.log("CASE 3: negative index");

  var animal = ["Dodo", "Tiger", "Penguin", "Dodo"];

  var string = "Dodo";

  var indexDodo = lastindexOf(animal, string, -2);

  var expectedOutput = 0;

  var copyAnimal = ["Dodo", "Tiger", "Penguin", "Dodo"];

  console.assert(indexDodo === expectedOutput);

  arrAssertTesting(animal, copyAnimal, copyAnimal);
}

{
  console.log("CASE 4: from index > length");

  var array = [2, 5, 9, 2];

  var result = lastindexOf(array, 7);

  var copyArray = [2, 5, 9, 2];

  expectedOutput = -1;

  console.assert(result === expectedOutput);

  arrAssertTesting(array, copyArray, copyArray);
}

{
  console.log("CASE 5: looking for 2 in pos 3");

  var array = [2, 5, 9, 2];

  var elem = 2;

  var result = lastindexOf(array, elem, 3);

  var expectedOutput = 3;

  var copyArray = [2, 5, 9, 2];

  console.assert(result === expectedOutput);

  arrAssertTesting(array, copyArray, copyArray);
}
{
  console.log("CASE 6: looking for 2 in pos 2");

  var array = [2, 5, 9, 2];
  var elem = 2;

  var result = lastindexOf(array, elem, 2);

  var expectedOutput = 0;

  var copyArray = [2, 5, 9, 2];

  console.assert(result === expectedOutput);

  arrAssertTesting(array, copyArray, copyArray);
}
{
  console.log("CASE 7: looking in negative pos");

  var array = [2, 5, 9, 2];

  var elem = 2;

  var result = lastindexOf(array, elem, -2);

  var expectedOutput = 0;

  var copyArray = [2, 5, 9, 2];

  console.assert(result === expectedOutput);

  arrAssertTesting(array, copyArray, copyArray);
}

{
  console.log("CASE 8: negative position");

  var array = [2, 5, 9, 2];
  var elem = 2;

  var result = lastindexOf(array, elem, -1);

  var expectedOutput = 3;

  var copyArray = [2, 5, 9, 2];

  console.assert(result === expectedOutput);

  arrAssertTesting(array, copyArray, copyArray);
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
