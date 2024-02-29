var assert = require("./assert");

var Animal = require("./Animal");

console.log("TEST Animal");
{
  console.log("CASE 1: Constructor");

  var animal = new Animal("kilombito", "dog", 5, "male", "20");

  assert.equalsValue(animal.name, "kilombito");
  assert.equalsValue(animal.race, "dog");
  assert.equalsValue(animal.age, 5);
  assert.equalsValue(animal.gender, "male");
  assert.equalsValue(animal.weight, "20");
  assert.equalsValue(animal.sleeping, false);
  assert.equalsValue(animal.eating, "");
  assert.equalsValue(animal.moving, "not-walk");
  assert.equalsValue(animal.energy, 50);
  assert.equalsValue(animal.fill, 10);
}
{
  console.log("CASE 2: animal eating");

  var animal = new Animal("kilombito", "dog", 5, "male", "20");

  animal.energy = 30;

  animal.fill = 0;

  animal.eat("cookies");

  assert.equalsValue(animal.eating, "cookies");
  assert.equalsValue(animal.energy, 65);
  assert.equalsValue(animal.fill, 100);
}
{
  console.log("CASE 3: animal shitting");

  var animal = new Animal("kilombito", "dog", 5, "male", "20");

  animal.fill = 100;

  animal.energy = 60;

  animal.toShit();

  assert.equalsValue(animal.fill, 45);
  assert.equalsValue(animal.energy, 40);
}
{
  console.log("CASE 4 - animal movingLegs");
  var animal = new Animal("kilombito", "dog", 5, "male", "20");

  animal.energy = 100;

  animal.moving = "walk";

  animal.moveLegs();

  assert.equalsValue(animal.moving, "run");
  assert.equalsValue(animal.energy, 80);
}
{
  console.log("CASE 5 - animal make noise");
  var animal = new Animal("kilombito", "dog", 5, "male", "20");

  animal.makeNoise("SIUUUUUUUU");

  assert.equalsValue(animal.noise, "SIUUUUUUUU");
}
