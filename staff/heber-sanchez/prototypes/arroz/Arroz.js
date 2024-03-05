const { it } = require("./matcha");

function Arroz() {
  if (arguments.length !== 1) {
    this.length = arguments.length;

    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments[i];

      this[i] = argument;
    }
  } else {
    var argument = arguments[0];

    if (typeof argument === "number") {
      this.length = argument;

      return;
    }

    this[0] = argument;
    this.length = 1;
  }
}

Arroz.prototype.toString = function () {
  var string = "Arroz [";
  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    string += elem;
    if (i < this.length - 1) string += ", ";
  }
  string += "]";

  return string;
};

Arroz.prototype.push = function () {
  for (var i = 0; i < arguments.length; i++) {
    var argument = arguments[i];
    this[this.length] = argument;
    this.length++;
  }

  return this.length;
};

module.exports = Arroz;

Arroz.prototype.pop = function () {
  var lastIndex = this.length - 1;
  var last = this[lastIndex];

  delete this[lastIndex];

  this.length--;
  return last;
};

Arroz.prototype.at = function (indexSearchElement) {
  var index =
    indexSearchElement > -1
      ? indexSearchElement
      : indexSearchElement + this.length;
  if (!index) var elem = this[0];
  else var elem = this[index];

  return elem;
};

Arroz.prototype.concat = function () {
  var newArroz = new Arroz();

  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    newArroz[newArroz.length] = elem;
    newArroz.length++;
  }
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof Arroz) {
      var array = arguments[i];
      for (var j = 0; j < array.length; j++) {
        var elem = array[j];
        newArroz[newArroz.length] = elem;
        newArroz.length++;
      }
    } else {
      newArroz[newArroz.length] = arguments[i];
      newArroz.length++;
    }
  }

  return newArroz;
};

Arroz.prototype.indexOf = function (searchElement, fromIndex) {
  var fromIndex = fromIndex < 0 ? fromIndex + this.length : fromIndex;

  if (!fromIndex) {
    for (var i = 0; i < this.length; i++) {
      var elem = this[i];
      if (elem === searchElement) {
        var foundIndex = i;
        return foundIndex;
      }
    }
  } else if (fromIndex > 0 && fromIndex < this.length) {
    for (var i = fromIndex; i < this.length; i++) {
      var elem = this[i];
      if (elem === searchElement) {
        var foundIndex = i;
        return foundIndex;
      }
    }
  }
  return -1;
};

Arroz.prototype.lastIndexOf = function (searchElement, fromIndex) {
  var length = this.length - 1;
  var fromIndex = fromIndex < 0 ? fromIndex + length : fromIndex;

  if (fromIndex === undefined || fromIndex > length) {
    for (var i = length; i > 0; i--) {
      var elem = this[i];
      if (elem === searchElement) {
        return i;
      }
    }
  } else if (fromIndex > -1) {
    for (var i = fromIndex; i > -1; i--) {
      var elem = this[i];
      if (elem === searchElement) {
        return i;
      }
    }
  }

  return -1;
};

Arroz.prototype.shift = function () {
  var shifted = this[0];
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  delete this[this.length];
  this.length--;

  return shifted;
};

Arroz.prototype.unShift = function () {
  var length = arguments.length + this.length;
  for (var i = length - 1; i > -1; i--) {
    this[i] = this[i - arguments.length];
  }
  for (var i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  return (this.length = length);
};

Arroz.prototype.filter = function (callback) {
  var newArroz = new Arroz();

  if (typeof callback !== "function")
    throw new TypeError("undefined is not a function");

  for (var i = 0; i < this.length; i++) {
    var elem = this[i];

    if (callback(elem) === true) {
      newArroz[newArroz.length] = elem;

      newArroz.length++;
    }
  }
  return newArroz;
};

Arroz.prototype.some = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("undefined is not a function");
  }
  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    if (callback(elem) === true) return true;
  }
  return false;
};

Arroz.prototype.every = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("undefined is not a function");
  }
  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    if (callback(elem) === false) return false;
  }
  return true;
};

Arroz.prototype.find = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("undefined is not a function");
  }
  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    if (callback(elem) === true) return elem;
  }
};

Arroz.prototype.with = function (index, value) {
  var newArroz = new Arroz();
  index = index < 0 ? index + this.length : index;

  if (index > this.length || index < -this.length) {
    throw new RangeError("Invalid index : " + index);
  }

  for (var i = 0; i < this.length; i++) {
    var elem = this[i];

    if (i === index) {
      newArroz[newArroz.length] = value;
      newArroz.length++;
    } else {
      newArroz[newArroz.length] = elem;
      newArroz.length++;
    }
  }

  return newArroz;
};

Arroz.prototype.reduce = function (callback, initialValue) {
  if (!!initialValue) {
    acc = initialValue;
    for (var i = 0; i < this.length; i++) acc = callback(acc, this[i]);
  } else {
    acc = this[0];
    for (var i = 1; i < this.length; i++) acc = callback(acc, this[i]);
  }

  return acc;
};

Arroz.prototype.includes = function (searchElement, indexFrom) {
  var indexFrom = indexFrom < 0 ? indexFrom + this.length : indexFrom;

  if (indexFrom < this.length || indexFrom < -this.length || !indexFrom)
    for (var i = 0; i < this.length; i++) {
      var elem = this[i];
      if (elem === searchElement) {
        return true;
      }
    }
  return false;
};

Arroz.prototype.findIndex = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("undefined is not a function");
  }

  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    var match = callback(elem);
    if (match) {
      return i;
    }
  }

  return -1;
};

Arroz.prototype.join = function (separator) {
  var separator = separator;
  var string = "";

  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    string += elem;
    if (i < this.length - 1) string += separator;
  }

  return string;
};

Arroz.prototype.map = function (callback) {
  var newArroz = new Arroz();

  for (var i = 0; i < this.length; i++) {
    var elem = this[i];
    var mappedObject = callback(elem, i, this);
    newArroz[newArroz.length++] = mappedObject;
  }
  return newArroz;
};
