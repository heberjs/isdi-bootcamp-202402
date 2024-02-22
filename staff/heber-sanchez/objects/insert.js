/**
 * Inserts an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate.
 * @param index - The index from which to insert the given values.
 * @param value - The value to insert.
 *
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function insertMany(object, index, ...values) {
  if (!(object instanceof Object) || arguments.length < 1) {
    throw new TypeError(object + " is not an Object");
  } else if (!(typeof index === "number")) {
    throw new TypeError(index + " is not a Number");

    // }else if (arguments.length < 3){}
  } else {
    for (var i = object.length - 1 + values.length; i > index; i--) {
      object[i] = object[i - values.length];
    }
    for (let i = 0; i < values.length; i++) {
      object[i + index] = values[i];
    }
  }

  return (object.length = object.length + values.length);
}

// console.log('CASE 1: insert skyblue in index 1')

var colors = {
  0: "red",
  1: "blue",
  2: "green",
  3: "brown",
  4: "grey",
  5: "white",
  6: "black",
  length: 7,
};

// console.log(colors)
// console.log(insertMany(colors, 5, 'skyblue'))
// console.log(colors)

console.log("CASE 2");

console.log(colors);
console.log(insertMany(colors, 1, "skyblue", "violet", "pink"));
console.log(colors);

/*
red , blue, skyblue, violet, pink, green, brown, grey, white, black
*/

try {
  insertMany();
} catch (error) {
  console.log(error);
  // TypeError: undefined is not an Object
}

console.log("CASE 4: fails on 1 as an object parameter");

try {
  insertMany(1);
} catch (error) {
  console.log(error);
  // TypeError: 1 is not an Object
}

console.log("CASE 5: fails on undefined as index parameter");

var colors = {
  0: "red",
  1: "blue",
  2: "green",
  length: 3,
};

try {
  insertMany(colors);
} catch (error) {
  console.log(error);
  // TypeError: undefined is not a Number
}
