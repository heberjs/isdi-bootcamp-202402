delete String.prototype.split

function split(string, separator) {
    var char = separator;
    var word = "";
    const array = [];
    var count = 0

    for(let i = 0; i < string.length; i ++){
        if(char !== string[i]){
            word = word + string[i];

        }else if(char === string[i]){
        array[count] = word
        word = ""
        count ++
        }
    }
    array[count] = word;
    return array;
}


// // CASE 1

var s = 'hola mundo amor'

var words = split(s, ' ')

console.log(words)
// ['hola', 'mundo']
