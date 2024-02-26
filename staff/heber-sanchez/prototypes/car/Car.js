function Car(
  brand,
  model,
  color,
  year,
  doors,
  fuelType,
  transmission,
  gears,
  status,
  deposit,
  gear,
  steering
) {
  (this.brand = brand),
    (this.model = model),
    (this.color = color),
    (this.transmission = transmission),
    (this.year = year),
    (this.doors = doors),
    (this.fuelType = fuelType),
    (this.gears = gears);
  (this.status = "off"),
    (this.deposit = 0),
    (this.gear = 0),
    (this.steering = 0);
  (this.speed = 0), (this.acceleration = 0), (this.direction = "");
}

Car.prototype.start = function () {
  this.status = "on";
};

Car.prototype.stop = function () {
  this.status = "off";
};

Car.prototype.fuel = function (load) {
  if (typeof load !== "number") {
    throw new TypeError(load + " is not a number");
  } else if (load < 0 || load > 100) {
    throw new RangeError(load + " is out of range");
  }

  this.deposit = load;
};

Car.prototype.changeGear = function (gear) {
  if (typeof gear !== "number") {
    throw new TypeError(gear + " is not a number");
  } else if (gear < -2 || gear > 7) {
    throw new RangeError(gear + " is out of range");
  }

  this.gear = gear;
  if (gear > 0) {
    this.direction = "forward";
  } else {
    this.direction = "backward";
  }
};

Car.prototype.speedUp = function (speedUp) {
  if (typeof speedUp !== "number") {
    throw new TypeError(speedUp + " is not a number");
  } else if (speedUp < -1 || speedUp > 150) {
    throw new RangeError(speedUp + " is out of range");
  }
  if (this.changeGear) this.acceleration = speedUp;
};

Car.prototype.changeSteering = function (steering) {
  if (typeof steering !== "number") {
    throw new TypeError(steering + " is not a number");
  } else if (steering < -45 || steering > 45) {
    throw new RangeError(steering + " is out of range");
  }
  this.steering = steering;
  if (steering > 0) this.direction = "forward-right";
  else if (steering < 0) this.direction = "backward-left";
};

module.exports = Car;
