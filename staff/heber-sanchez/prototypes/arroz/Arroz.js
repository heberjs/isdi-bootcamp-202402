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
