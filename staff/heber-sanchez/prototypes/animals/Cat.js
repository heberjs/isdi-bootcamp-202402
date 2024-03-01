var Pet = require("./Pet");

function Cat(owner, name, birthdate, country, weight) {
  Pet.call(this, owner, name, birthdate, country, weight);
}

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;
