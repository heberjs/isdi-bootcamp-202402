var Pet = require("./Pet");
var assert = require("./assert");

console.log("TEST Pet");
{
  console.log("CASE 1: Constructor");

  var pet = new Pet("juancito", "human", 22, "male", "60");

  assert.equalsValue(pet.name, "juancito");
  assert.equalsValue(pet.race, "human");
  assert.equalsValue(pet.age, 22);
  assert.equalsValue(pet.gender, "male");
  assert.equalsValue(pet.weight, "60");
  assert.equalsValue(pet.sleeping, false);
  assert.equalsValue(pet.eating, "");
  assert.equalsValue(pet.moving, "not-walk");
  assert.equalsValue(pet.energy, 50);
  assert.equalsValue(pet.fill, 10);
}
{
  console.log("CASE 2: pet eating");

  var pet = new Pet("juancito", "human", 23, "male", "20");

  pet.energy = 30;

  pet.fill = 0;

  pet.eat("milanesa");

  assert.equalsValue(pet.eating, "milanesa");
  assert.equalsValue(pet.energy, 65);
  assert.equalsValue(pet.fill, 100);
}
{
  console.log("CASE 3: pet shitting");

  var pet = new Pet("juancito", "human", 34, "male", "20");

  pet.fill = 100;

  pet.energy = 60;

  pet.toShit();

  assert.equalsValue(pet.fill, 45);
  assert.equalsValue(pet.energy, 40);
}
{
  console.log("CASE 4 - pet movingLegs");
  var pet = new Pet("juancito", "human", 32, "male", "20");

  pet.energy = 100;

  pet.moving = "walk";

  pet.moveLegs();

  assert.equalsValue(pet.moving, "run");
  assert.equalsValue(pet.energy, 80);
}
{
  console.log("CASE 5 - pet make noise");
  var pet = new Pet("juancito", "human", 43, "male", "20");

  pet.makeNoise("hola wey");

  assert.equalsValue(pet.noise, "hola wey");
}

console.log("CASE 6 - pet - give paw");

pet.energy = 70;
pet.fill = 20;

pet.givePaw = "giving-paw";

assert.equalsValue(pet.givePaw === "giving-paw");
