var Person = require("./Person");
var assert = require("./assert");

console.log("TEST Person");
{
  console.log("CASE 1: Constructor");

  var person = new Person("juancito", "human", 22, "male", "60");

  assert.equalsValue(person.name, "juancito");
  assert.equalsValue(person.race, "human");
  assert.equalsValue(person.age, 22);
  assert.equalsValue(person.gender, "male");
  assert.equalsValue(person.weight, "60");
  assert.equalsValue(person.sleeping, false);
  assert.equalsValue(person.eating, "");
  assert.equalsValue(person.moving, "not-walk");
  assert.equalsValue(person.energy, 50);
  assert.equalsValue(person.fill, 10);
}
{
  console.log("CASE 2: person eating");

  var person = new Person("juancito", "human", 23, "male", "20");

  person.energy = 30;

  person.fill = 0;

  person.eat("milanesa");

  assert.equalsValue(person.eating, "milanesa");
  assert.equalsValue(person.energy, 65);
  assert.equalsValue(person.fill, 100);
}
{
  console.log("CASE 3: person shitting");

  var person = new Person("juancito", "human", 34, "male", "20");

  person.fill = 100;

  person.energy = 60;

  person.toShit();

  assert.equalsValue(person.fill, 45);
  assert.equalsValue(person.energy, 40);
}
{
  console.log("CASE 4 - person movingLegs");
  var person = new Person("juancito", "human", 32, "male", "20");

  person.energy = 100;

  person.moving = "walk";

  person.moveLegs();

  assert.equalsValue(person.moving, "run");
  assert.equalsValue(person.energy, 80);
}
{
  console.log("CASE 5 - person make noise");
  var person = new Person("juancito", "human", 43, "male", "20");

  person.makeNoise("hola wey");

  assert.equalsValue(person.noise, "hola wey");
}
