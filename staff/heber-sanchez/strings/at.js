delete String.prototype.at

// function at(string, index) {
//     var char = "";
//     if(index >= 0) {
//         for(let i = 0; i < string.length; i++){
//             if(string[i] === string[index]){
//                 console.log(string[i]);
//                 return char = string[index]
//             }
//         } 
//     }else if(index < 0) {
//         for(let i = string.length + index; i < string.length; i++){
//             if(string[i] === string[i]){
//                 console.log(string[i]);
//                 return char = string[i]
//             }
//         }
//     }
// }

function at(string, index){

    var character
    if(index > 0){
        character = string[index]
        return character
    }else{
        character = string[string.length  + index]
        return character
    }

}

// at("hola mundo", -5);

// CASE 1

// var s = 'hola mundo'

// var char = at(s, 6)
// // 'u'

// // CASE 2

// var s = 'hola mundo'

// var char = at(s, 20)
// // undefined

// // CASE 3

// var s = 'hola mundo'

// var char = at(s, -4)
// // 'u'