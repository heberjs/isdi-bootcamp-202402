var Dog = require("./Dog");
var assert = require("./assert");

console.log("TEST Dog");
{
  console.log("CASE 1: Constructor");

  var dog = new Dog("juancito", "human", 22, "male", "60");

  assert.equalsValue(dog.name, "juancito");
  assert.equalsValue(dog.race, "human");
  assert.equalsValue(dog.age, 22);
  assert.equalsValue(dog.gender, "male");
  assert.equalsValue(dog.weight, "60");
  assert.equalsValue(dog.sleeping, false);
  assert.equalsValue(dog.eating, "");
  assert.equalsValue(dog.moving, "not-walk");
  assert.equalsValue(dog.energy, 50);
  assert.equalsValue(dog.fill, 10);
}
{
  console.log("CASE 2: dog eating");

  var dog = new Dog("juancito", "human", 23, "male", "20");

  dog.energy = 30;

  dog.fill = 0;

  dog.eat("milanesa");

  assert.equalsValue(dog.eating, "milanesa");
  assert.equalsValue(dog.energy, 65);
  assert.equalsValue(dog.fill, 100);
}
{
  console.log("CASE 3: dog shitting");

  var dog = new Dog("juancito", "human", 34, "male", "20");

  dog.fill = 100;

  dog.energy = 60;

  dog.toShit();

  assert.equalsValue(dog.fill, 45);
  assert.equalsValue(dog.energy, 40);
}
{
  console.log("CASE 4 - dog movingLegs");
  var dog = new Dog("juancito", "human", 32, "male", "20");

  dog.energy = 100;

  dog.moving = "walk";

  dog.moveLegs();

  assert.equalsValue(dog.moving, "run");
  assert.equalsValue(dog.energy, 80);
}
{
  console.log("CASE 5 - dog make noise");
  var dog = new Dog("juancito", "human", 43, "male", "20");

  dog.makeNoise("hola wey");

  assert.equalsValue(dog.noise, "hola wey");
}
