debugger
function slice(string, start, end){
    debugger
    let result = "";
    if (start > 0 && end > start){
        debugger
    for(let i = start; i < end; i ++){
        result = result + string[i];
        }
        return result;
    }
    else if (start > 0 && end < 0){
        debugger
        for(let i = start; i < string.length + end; i++ ){
            result = result + string[i];
            
        }
        return result;
    }
    else if(end === undefined) {
        debugger
        for(let i = string.length + start; i < string.length; i ++){
            result = result + string[i];
        }
        return result
    }
}


// CASE 1

var s = 'hola mundo'

var piece = slice(s, 5, 8)

console.log(piece)
// 'mun'

// CASE 2

var s = 'hola mundo'

var piece = slice(s, -3)

console.log(piece)
// 'ndo'