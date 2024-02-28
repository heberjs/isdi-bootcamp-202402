/**
 * Adds an element in an iterable object.
 *
 * @param object - The iterable object to mutate.
 * @param value - The value to add.
 *
 * @throws {TypeError} When object is not an object.
 */
function add(object, value) {
  if (!(object instanceof Object)) {
    throw new TypeError(object + " is not an Object");
  } else if (arguments.length < 2) {
    return object.length;
  } else {
    object[object.length] = value;

    return object.length++;
  }
}

var colors = {
  0: "red",
  1: "blue",
  2: "green",
  length: 3,
};
{
  console.log("CASE 1: add violet");

  var length = add(colors, "violet");

  console.log(length);
  // 4
  console.log(colors);
  /*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'violet',
    length: 4
}
*/
}
{
  ("CASE 2: error - string is not an object");
  try {
    add("string", "violet");
  } catch (error) {
    console.log(error);
  }
}
