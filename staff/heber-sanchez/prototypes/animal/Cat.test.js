var Cat = require("./Cat");
var assert = require("./assert");

console.log("TEST Cat");
{
  console.log("CASE 1: Constructor");

  var cat = new Cat("mishi", "cat", 2, "female", 5);

  assert.equalsValue(cat.name, "juancito");
  assert.equalsValue(cat.race, "human");
  assert.equalsValue(cat.age, 22);
  assert.equalsValue(cat.gender, "male");
  assert.equalsValue(cat.weight, 5);
  assert.equalsValue(cat.sleeping, false);
  assert.equalsValue(cat.eating, "");
  assert.equalsValue(cat.moving, "not-walk");
  assert.equalsValue(cat.energy, 50);
  assert.equalsValue(cat.fill, 10);
}
{
  console.log("CASE 2: cat eating");

  var cat = new Cat("mishi", "cat", 2, "female", 5);

  cat.energy = 30;

  cat.fill = 0;

  cat.eat("fish");

  assert.equalsValue(cat.eating, "fish");
  assert.equalsValue(cat.energy, 65);
  assert.equalsValue(cat.fill, 100);
}
{
  console.log("CASE 3: cat shitting");

  var cat = new Cat("mishi", "cat", 2, "female", 5);

  cat.fill = 100;

  cat.energy = 60;

  cat.toShit();

  assert.equalsValue(cat.fill, 45);
  assert.equalsValue(cat.energy, 40);
}
{
  console.log("CASE 4 - cat movingLegs");
  var cat = new Cat("mishi", "cat", 2, "female", 5);

  cat.energy = 100;

  cat.moving = "walk";

  cat.moveLegs();

  assert.equalsValue(cat.moving, "run");
  assert.equalsValue(cat.energy, 80);
}
{
  console.log("CASE 5 - cat make noise");
  var cat = new Cat("mishi", "cat", 2, "female", 5);

  cat.makeNoise("miau");

  assert.equalsValue(cat.noise, "miau");
}
