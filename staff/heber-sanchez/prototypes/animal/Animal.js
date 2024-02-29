function Animal(
  name,
  race,
  age,
  gender,
  weight,
  noise,
  sleeping,
  eating,
  moving,
  energy,
  hungry
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

Animal.prototype.sleep = function () {
  this.sleeping = true;
};

Animal.prototype.awake = function () {
  this.sleeping = false;
};

Animal.prototype.eat = function (food) {
  this.eating = food;
  this.energy += 35;
  this.fill += 100;
};

Animal.prototype.makeNoise = function (noise) {
  this.noise = noise;
};
Animal.prototype.toShit = function () {
  if (this.fill > 50) this.fill -= 55;

  if (this.energy > 50) this.energy -= 20;
};

Animal.prototype.moveLegs = function () {
  this.moving = "run";
  this.energy -= 20;
};

module.exports = Animal;
