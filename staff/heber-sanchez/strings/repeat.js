delete String.prototype.repeat

function repeat(string, count) {
    debugger
    var result = "";
    for(let i = 0; i < count; i++){
        debugger
        result = result + string;
    }
    return result;
}

var resultado = repeat("happy ", 3)
console.log(resultado);
// CASE 1

// var s = 'happy! '

// var result = repeat(s, 3)

// console.log(result)
// 'happy! happy! happy!'

