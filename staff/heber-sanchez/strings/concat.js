
var nombre = "Pau"

var apellido = "julian"

function concat( separator, string1, string2) {

    result = `${string1}${separator}${string2}`;

    return result

}

const united = concat(nombre, apellido,", ");

console.log(united);

