function Person(name, age, weight, energy, hunger) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.energy = energy;
  this.hunger = hunger === undefined ? 0 : hunger;
}
module.exports = Person;

Person.prototype.eat();
