var Animal = require("./Animal");
function Person(
  name,
  race,
  age,
  gender,
  weight,
  noise,
  sleeping,
  eating,
  moving,
  energy
) {
  (this.name = name),
    (this.race = race),
    (this.age = age),
    (this.gender = gender),
    (this.weight = weight),
    (this.noise = ""),
    (this.sleeping = false),
    (this.eating = ""),
    (this.energy = 50),
    (this.fill = 10),
    (this.moving = "not-walk");
}

Person.prototype = new Animal();

module.exports = Person;
