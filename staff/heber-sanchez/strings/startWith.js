delete String.prototype.startsWith

function startsWith(string, searchString) {
    result = "";

    for(let i = 0; i < searchString.length; i++) {
        result = result + string[i];
    }
    if(result === searchString){
        return true
    }else {
       return false
    }
}

// CASE 1
var s = 'hola mundo'

var result = startsWith(s, 'hol')

console.log(result)
// true

// CASE 2

var s = 'hola mundo'

var result = startsWith(s, 'holo')

console.log(result)
// false