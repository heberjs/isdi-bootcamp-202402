delete String.prototype.indexOf

debugger
function indexOf(string, searchString) {
    debugger
    
    var char = ""
    var count = 0
    var indexMatch = 0;
    
    for(let i = 0; i < string.length; i ++){
        debugger
        if(string[i] === searchString[count]){
            char = char + string[i];
            count ++
            indexMatch = i + 1 - count 
        }

    }

    if(char !== searchString){
        return -1
    } else {
        return indexMatch
    }
}

// CASE 1
var s = 'hola mundo'

var index = indexOf(s, 'mun')

console.log(index)


// CASE 2

// var s = 'hola mundo'

// var index = indexOf(s, 'olaf')

// console.log(index)
// // -1