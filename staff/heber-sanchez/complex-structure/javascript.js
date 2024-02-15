
const thingsToturtle = {
    ages: [22, 43, 66, 32],
    weaponsTwo : [ ["sword", "shield"], "hammer"]

};

const get = ()=> {
    return thingsToturtle;
}

const obteinGet =()=> {
    return get;
}


const ninjaturtle = {
    name: "donatello",
    age: 32,
    skills:[ hungry =()=>{
        return pizza
    }, 
    fight = ()=>{
        return "ready to fight";
    }],
    weapons: ["nunchaku", ["blade", "knife"], "katana"],
}


console.log(ninjaturtle);

//cambia su nombre a leonardo
ninjaturtle.name = "leonardo";


//llama a la funcion fight del objeto - es hora de combatir, muestralo en consola
let fighting = ninjaturtle.skills[1];
console.log(fighting());

//llama a la funcion get ingresa al objeto y extrae la edad de 66, despues asignala a la tortuga, muestralo en consola.
let getAge = get().ages[2];
console.log(getAge);
ninjaturtle.age = getAge;
console.log(ninjaturtle);

//llama a la funcion obteinGet para obtener la otra funcion que contiene el objeto de ahi mismo extrae el shield" y asignala en el objeto de tortuga en sus weapons reemplazando el knife

let getting = obteinGet();
let shield = getting().weaponsTwo[0][1];
console.log(shield);

ninjaturtle.weapons[1][1] = shield;
console.log(ninjaturtle);

