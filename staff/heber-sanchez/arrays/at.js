delete Array.prototype.at;

function at(array, index) {
  //1 if(index > 0){
  //    char = array[index]
  //     return char
  // }else {

  //     char = array[array.length + index];
  //     return char
  // }

  //2 let targetIndex = index > -1? index : array.length + index
  // let element = array[targetIndex];
  // return element;

  //3
  return array[index > -1 ? index : array.length + index];
}

// CASE 1

var nums = [100, 200, 300, 400, 500];

var num = at(nums, 3);

console.log(num);
// 400

// CASE 2

var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var char = at(chars, 4);

console.log(char);
// ' '

// CASE 3

var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var char = at(chars, -3);

console.log(char);
// 'n'

// CASE 4

var chars = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var char = at(chars, -30);

console.log(char);
// undefined
