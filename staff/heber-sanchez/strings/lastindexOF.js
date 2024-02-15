delete String.prototype.lastIndexOf

function lastIndexOf(string, searchString) {

    var char = "";
    var count = 0;
    var matchLastIndex = 0;

    for(let i = 0; i < string.length; i++){

        if(string[i] === searchString[count]){
            char = char + string[i]
            count ++
            matchLastIndex = i
        }
    }
    if(char !== searchString){
        return -1
    } else {
        return matchLastIndex
    }

    
}

// CASE 1

var s = 'hola mundo'

var index = lastIndexOf(s, 'muf')

console.log(index)
// 9

// CASE 2

var s = 'hola mundo'

var index = lastIndexOf(s, 'ol')

console.log(index)
// 1