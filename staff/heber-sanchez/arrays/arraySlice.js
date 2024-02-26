delete Array.prototype.slice;

function slice(array, indexStart, indexEnd) {
  var newArray = [];

  if (arguments.length < 3 && indexStart > -1 && indexStart < array.length) {
    for (let i = indexStart; i < array.length; i++) {
      newArray[newArray.length] = array[i];
    }
  } else if (
    indexStart > -1 &&
    indexStart < array.length &&
    indexEnd > -1 &&
    indexEnd < array.length
  ) {
    for (let i = indexStart + array.length; i < array.length; i++) {
      newArray[newArray.length] = array[i];
    }
  } else if (indexStart > -1 && indexEnd < 0) {
    for (let i = indexStart; i < indexEnd + array.length; i++) {
      newArray[newArray.length] = array[i];
    }
  } else if (indexStart > -1 && indexEnd > array.length)
    for (let i = indexStart; i < indexEnd; i++) {
      newArray[newArray.length] = array[i];
    }
  else if (arguments.length < 2) {
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
  }

  return newArray;
}

{
  console.log("CASE 1: without indexEnd");

  var animals = ["ant", "bison", "camel", "duck", "elephant"];

  var result = slice(animals, 2);

  var expectedOutput = ["camel", "duck", "elephant"];

  var copyAnimals = ["ant", "bison", "camel", "duck", "elephant"];

  arrAssertTesting(animals, copyAnimals, copyAnimals);

  arrAssertTesting(expectedOutput, result, expectedOutput);

  {
    console.log("CASE 2");
    var animals = ["ant", "bison", "camel", "duck", "elephant"];

    var result = slice(animals, 2, 4);

    var expectedOutput = ["camel", "duck"];

    var copyAnimals = ["ant", "bison", "camel", "duck", "elephant"];

    arrAssertTesting(animals, copyAnimals, copyAnimals);
    arrAssertTesting(expectedOutput, result, expectedOutput);
  }
  {
    console.log("CASE 3");
    var animals = ["ant", "bison", "camel", "duck", "elephant"];

    var result = slice(animals, 1, 5);

    var expectedOutput = ["bison", "camel", "duck", "elephant"];

    var copyAnimals = ["ant", "bison", "camel", "duck", "elephant"];

    arrAssertTesting(animals, copyAnimals, copyAnimals);
    arrAssertTesting(expectedOutput, result, expectedOutput);
  }
  {
    console.log("CASE 4");
    var animals = ["ant", "bison", "camel", "duck", "elephant"];

    var result = slice(animals, -2);

    var expectedOutput = ["duck", "elephant"];

    var copyAnimals = ["ant", "bison", "camel", "duck", "elephant"];

    arrAssertTesting(animals, copyAnimals, copyAnimals);
    arrAssertTesting(expectedOutput, result, expectedOutput);
  }
  {
    console.log("CASE 5");
    var animals = ["ant", "bison", "camel", "duck", "elephant"];

    var result = slice(animals, 2, -1);

    var expectedOutput = ["camel", "duck"];

    var copyAnimals = ["ant", "bison", "camel", "duck", "elephant"];

    arrAssertTesting(animals, copyAnimals, copyAnimals);
    arrAssertTesting(expectedOutput, result, expectedOutput);
  }
  {
    console.log("CASE 6");
    var animals = ["ant", "bison", "camel", "duck", "elephant"];

    var result = slice(animals);

    var expectedOutput = ["ant", "bison", "camel", "duck", "elephant"];

    var copyAnimals = ["ant", "bison", "camel", "duck", "elephant"];

    arrAssertTesting(animals, copyAnimals, copyAnimals);
    arrAssertTesting(expectedOutput, result, expectedOutput);
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
}
