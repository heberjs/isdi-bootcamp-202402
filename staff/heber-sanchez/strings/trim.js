delete String.prototype.trim;

function trim(string) {
  debugger;

  var startIndex = 0;
  function notFound() {
    return (
      string[i] !== " " &&
      string[i] !== "\n" &&
      string[i] !== "\t" &&
      string[i] !== "\r"
    );
  }

  for (var i = 0; i < string.length; i++) {
    if (notFound()) {
      startIndex = i;
      break;
    }
  }
  var endIndex = string.length - 1;
  for (var i = endIndex; i > -1; i--) {
    if (notFound()) {
      endIndex = i;
      break;
    }
  }

  var trimed = "";
  for (let i = startIndex; i < endIndex + 1; i++) {
    trimed = trimed + string[i];
  }
  return trimed;
}

// CASE 1

var s = "  hola mundo   ";

var result = trim(s);

console.log(result);
// 'hola mundo'

// CASE 2

var s = " \n\t\r hola mundo \n\t\r ";

var result = trim(s);

console.log(result);
// 'hola mundo'
