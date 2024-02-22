/**
 * Extracts an element that matches the condition from an iterable object.
 *
 * @param object - The iterable object to mutate.
 * @param index - The index from which to extract a value.
 *
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function extract(object, callback) {
  var extract = {};
  deleteIndex = -1;
  debugger;
  for (var i = object.length - 1; i > -1; i--) {
    if (callback(object[i]) === true) {
      extract = object[i];
      deleteIndex = i;
    }
  }

  if (deleteIndex !== -1) {
    for (let j = deleteIndex; j < object.length; j++) {
      object[j] = object[j + 1];
    }
  }
  object.length--;
  return extract;
}

console.log("CASE 1: extract user pepito form users");

var users = {
  0: { name: "Wendy", age: 19 },
  1: { name: "Peter", age: 20 },
  2: { name: "Pepito", age: 50 },
  3: { name: "Campa", age: 30 },
  4: { name: "James", age: 40 },
  length: 5,
};

console.log(users);

var user = extract(users, function (user) {
  return user.name === "Pepito";
});

console.log(user);
// { name: 'Pepito', age: 50 }

console.log(users);
