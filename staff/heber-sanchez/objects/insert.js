/**
 * Inserts an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate.
 * @param index - The index from which to insert the given values.
 * @param value - The value to insert.
 *
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */

function insertMany(object, index, values) {
  if (!(object instanceof Object) || arguments.length < 1)
    throw new TypeError(object + " is not an Object");

  if (!(typeof index === "number"))
    throw new TypeError(index + " is not a Number");

  var argValues = arguments.length - 2;

  for (var i = object.length - 1 + argValues; i > index; i--)
    object[i] = object[i - argValues];

  for (var j = index; j < argValues; j++)
    object[j] = values[arguments.length - 2];

  return (object.length = object.length + values.length);
}

var colors = {
  0: "red",
  1: "blue",
  2: "green",
  3: "brown",
  4: "grey",
  length: 5,
};

console.log(colors);

console.log(insertMany(colors, 1, "roto", "quema", "kilo"));

console.log(colors);

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
