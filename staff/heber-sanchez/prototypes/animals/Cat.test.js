var assert = require("./assert");
var Pet = require("./Pet");
var Cat = require("./Cat");
var Person = require("./Person");

console.log("Test cAT");

console.log("Cat constructor");

var peter = new Person(
  "Peter",
  "Pan",
  new Date(2000, 0, 31, 16, 45),
  "GB",
  140,
  50
);

var mishi = new Cat(peter, "mishi", new Date(2024, 1, 17, 13, 13), "AR", 5);

assert.equalsValue(mishi.constructor, Cat);
