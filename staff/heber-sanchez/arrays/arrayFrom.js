delete Array.prototype.from;

function from(string, mapFrom) {
  debugger;
  var newArray = [];

  for (let i = 0; i < string.length; i++) {
    if (arguments.length < 2) {
      newArray[i] = string[i];
    } else {
      newArray[i] = mapFrom(string[i]);
    }
  }

  return newArray;
}

console.log("CASE 1");
console.log(from("foo"));
// [ "f", "o", "o" ];
console.log("CASE 2");
console.log(from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6];
