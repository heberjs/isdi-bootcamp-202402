var matcha = require("./matcha");
var Arroz = require("./Arroz");

matcha.describe("Arroz", function () {
  matcha.describe("> constructor", function () {
    matcha.it("should construct", function () {
      var a = new Arroz();

      matcha.expect(a).toBeInstanceOf(Arroz);
      matcha.expect(a.length).toBe(0);
    });
    matcha.it("should construct with multiple values", function () {
      var a = new Arroz(10, 20, 30);

      matcha.expect(a).toBeInstanceOf(Arroz);
      matcha.expect(a.length).toBe(3);
      matcha.expect(a[0]).toBe(10);
      matcha.expect(a[1]).toBe(20);
      matcha.expect(a[2]).toBe(30);
    });

    matcha.it("should construct with one non-numeric value", function () {
      var a = new Arroz(true);

      matcha.expect(a).toBeInstanceOf(Arroz);
      matcha.expect(a.length).toBe(1);
      matcha.expect(a[0]).toBe(true);
    });
    matcha.it("should construct with one numeric value", function () {
      var a = new Arroz(5);

      matcha.expect(a).toBeInstanceOf(Arroz);
      matcha.expect(a.length).toBe(5);
      for (var i = 0; i < a.length; i++) matcha.expect(a[i]).toBe(undefined);
    });
  });

  matcha.describe("> push", function () {
    matcha.it("should push a value", function () {
      var a = new Arroz(10, 20, 30);

      matcha.expect(!!a.push).toBe(true);

      var length = a.push(40);

      matcha.expect(a[a.length - 1]).toBe(40);
      matcha.expect(length).toBe(4);
    });

    matcha.it("should push many values", function () {
      var a = new Arroz(10, 20, 30);
      matcha.expect(!!a.push).toBe(true);

      var length = a.push(40, 50, 60, 70);
      matcha.expect(a.length).toBe(7);
      matcha.expect(a[0]).toBe(10);
      matcha.expect(a[1]).toBe(20);
      matcha.expect(a[2]).toBe(30);
      matcha.expect(a[3]).toBe(40);
      matcha.expect(a[4]).toBe(50);
      matcha.expect(a[5]).toBe(60);
      matcha.expect(a[6]).toBe(70);
      matcha.expect(length).toBe(7);
    });
  });

  matcha.describe("> pop", function () {
    var a = new Arroz(10, 20, 30);
    matcha.expect(!!a.pop).toBe(true);

    var value = a.pop();
    matcha.expect(a.length).toBe(2);

    matcha.expect(a[0]).toBe(10);
    matcha.expect(a[1]).toBe(20);
    matcha.expect(a[2]).toBe(undefined);
    matcha.expect(value).toBe(30);
  });

  matcha.describe("> at", function () {
    matcha.it("should return value stored on position index", function () {
      var a = new Arroz(5, 12, 8, 130, 44);
      matcha.expect(!!a.at).toBe(true);

      var value = a.at(2);

      matcha.expect(value).toBe(8);
    });

    matcha.it(
      "should return value stored on position index, from the end when index is negative",
      function () {
        var a = new Arroz(5, 12, 8, 130, 44);
        matcha.expect(!!a.at).toBe(true);

        var value = a.at(-2);

        matcha.expect(value).toBe(130);
      }
    );
    matcha.it(
      "should return value undefined, if index is greater than Arroz.length or smaller than Arroz.lenght",
      function () {
        var a = new Arroz(5, 12, 8, 130, 44);
        matcha.expect(!!a.at).toBe(true);

        var value = a.at(-10);
        matcha.expect(value).toBe(undefined);

        var value = a.at(12);
        matcha.expect(value).toBe(undefined);
      }
    );
    matcha.it(
      "should return value stored on position 0, when index does not exist",
      function () {
        var a = new Arroz(5, 12, 8, 130, 44);
        matcha.expect(!!a.at).toBe(true);

        var value = a.at();
        matcha.expect(value).toBe(5);
      }
    );
  });

  matcha.describe("> concat", function () {
    matcha.it("should merge two or more arroz in one arroz", function () {
      var a = new Arroz("a", "b", "c");
      matcha.expect(!!a.concat).toBe(true);

      var b = new Arroz("d", "e", "f");
      matcha.expect(!!b.concat).toBe(true);

      var value = a.concat(b);
      matcha.expect(value[0]).toBe("a");
      matcha.expect(value[1]).toBe("b");
      matcha.expect(value[2]).toBe("c");
      matcha.expect(value[3]).toBe("d");
      matcha.expect(value[4]).toBe("e");
      matcha.expect(value[5]).toBe("f");
      matcha.expect(value.length).toBe(6);

      matcha.expect(a[0]).toBe("a");
      matcha.expect(a[1]).toBe("b");
      matcha.expect(a[2]).toBe("c");
      matcha.expect(a.length).toBe(3);
      matcha.expect(b[0]).toBe("d");
      matcha.expect(b[1]).toBe("e");
      matcha.expect(b[2]).toBe("f");
      matcha.expect(b.length).toBe(3);
    });
    matcha.it(
      "should merge two arroz and other value in one arroz",
      function () {
        var a = new Arroz("a", "b", "c");
        matcha.expect(!!a.concat).toBe(true);

        var b = new Arroz("d", "e", "f");
        matcha.expect(!!b.concat).toBe(true);

        var c = "hello world";

        var value = a.concat(b, c);

        matcha.expect(value[0]).toBe("a");
        matcha.expect(value[1]).toBe("b");
        matcha.expect(value[2]).toBe("c");
        matcha.expect(value[3]).toBe("d");
        matcha.expect(value[4]).toBe("e");
        matcha.expect(value[5]).toBe("f");
        matcha.expect(value[6]).toBe("hello world");
        matcha.expect(value.length).toBe(7);
      }
    );
    matcha.it(
      "should return a new arroz with the first arroz, when concat is empty",
      function () {
        var a = new Arroz("a", "b", "c");
        matcha.expect(!!a.concat).toBe(true);
        var value = a.concat();
        matcha.expect(value[0]).toBe("a");
        matcha.expect(value[1]).toBe("b");
        matcha.expect(value[2]).toBe("c");
        matcha.expect(value.length).toBe(3);
      }
    );
  });

  matcha.describe("> indexOf", function () {
    matcha.it(
      "should return the first index at which a given element can be found in the array, or -1 if it is not present.",
      function () {
        var a = new Arroz("elephant", "cow", "tiger", "lyon");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.indexOf("tiger");
        matcha.expect(!!a.indexOf).toBe(true);
        matcha.expect(value).toBe(2);

        matcha.expect(a[0]).toBe("elephant");
        matcha.expect(a[1]).toBe("cow");
        matcha.expect(a[2]).toBe("tiger");
        matcha.expect(a[3]).toBe("lyon");
      }
    );
    matcha.it(
      "Should return the first index of a given element from the specified index",
      function () {
        var a = new Arroz("elephant", "cow", "tiger", "lyon");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.indexOf("lyon", 2);
        matcha.expect(!!a.indexOf).toBe(true);
        matcha.expect(value).toBe(3);

        matcha.expect(a[0]).toBe("elephant");
        matcha.expect(a[1]).toBe("cow");
        matcha.expect(a[2]).toBe("tiger");
        matcha.expect(a[3]).toBe("lyon");
      }
    );
    matcha.it(
      "Should return the first index of a given element from the specified negative index, counting back from the end.",
      function () {
        var a = new Arroz("elephant", "cow", "tiger", "lyon");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var negValue = a.indexOf("tiger", -2);
        matcha.expect(negValue).toBe(2);

        matcha.expect(a[0]).toBe("elephant");
        matcha.expect(a[1]).toBe("cow");
        matcha.expect(a[2]).toBe("tiger");
        matcha.expect(a[3]).toBe("lyon");
      }
    );
    matcha.it(
      "Should return -1 if the specified index is greater or smaller than the length of the array.",
      function () {
        var a = new Arroz("elephant", "cow", "tiger", "lyon");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var negValue = a.indexOf("tiger", -6);
        matcha.expect(negValue).toBe(-1);

        matcha.expect(a[0]).toBe("elephant");
        matcha.expect(a[1]).toBe("cow");
        matcha.expect(a[2]).toBe("tiger");
        matcha.expect(a[3]).toBe("lyon");
      }
    );
  });
  matcha.describe("lastIndexOf", function () {
    matcha.it(
      "returns the last index at which a given element can be found in the array, or -1 if it is not present.",
      function () {
        var a = new Arroz("ferrari", "dodge", "fiat", "dodge", "ferrari");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.lastIndexOf("ferrari");
        matcha.expect(!!a.lastIndexOf).toBe(true);
        matcha.expect(value).toBe(4);

        var value2 = a.lastIndexOf("dodge");
        matcha.expect(value2).toBe(3);
      }
    );
    matcha.it(
      "Should return the last index of a given element when counting backward from the specified index.",
      function () {
        var a = new Arroz("ferrari", "dodge", "fiat", "dodge", "ferrari");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.lastIndexOf("ferrari", -2);
        matcha.expect(!!a.lastIndexOf).toBe(true);
        matcha.expect(value).toBe(0);

        var value2 = a.lastIndexOf("dodge", 3);
        matcha.expect(value2).toBe(3);
      }
    );
    matcha.it(
      "Should return the last index of a given element when counting backward from the specified index. can be positive or negative index",
      function () {
        var a = new Arroz("ferrari", "dodge", "fiat", "dodge", "ferrari");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.lastIndexOf("ferrari", -2);
        matcha.expect(!!a.lastIndexOf).toBe(true);
        matcha.expect(value).toBe(0);

        var value2 = a.lastIndexOf("dodge", 3);
        matcha.expect(value2).toBe(3);
      }
    );
    matcha.it(
      "should return the last index of a given element when this.length is greater than length, but if smaller than -this.lenght return -1",
      function () {
        var a = new Arroz("white", "red", "grey", "red", "white");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.lastIndexOf("white", 23);
        matcha.expect(!!a.lastIndexOf).toBe(true);

        var value2 = a.lastIndexOf("grey", -14);

        matcha.expect(value).toBe(4);
        matcha.expect(value2).toBe(-1);
      }
    );
  });

  matcha.describe("> shift", function () {
    matcha.it(
      "removes the first element from an array and returns that removed element. This method changes the length of the array.",
      function () {
        var a = new Arroz("Argentine", "Chile", "Brazil", "Peru");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.shift();
        matcha.expect(!!a.shift).toBe(true);

        matcha.expect(value).toBe("Argentine");
        matcha.expect(a.length).toBe(3);
        matcha.expect(a[0]).toBe("Chile");
        matcha.expect(a[1]).toBe("Brazil");
        matcha.expect(a[2]).toBe("Peru");
      }
    );
  });
  matcha.describe("> unshift", function () {
    matcha.it(
      "adds the specified elements to the beginning of an array and returns the new length of the array.",
      function () {
        var a = new Arroz("c", "d", "e");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.unShift("a", "b");
        matcha.expect(!!a.unShift).toBe(true);

        matcha.expect(value).toBe(5);
        matcha.expect(a[0]).toBe("a");
        matcha.expect(a[1]).toBe("b");
        matcha.expect(a[2]).toBe("c");
        matcha.expect(a[3]).toBe("d");
        matcha.expect(a[4]).toBe("e");
      }
    );
  });

  matcha.describe("> filter", function () {
    matcha.it("", function () {
      var a = new Arroz(
        "spray",
        "elite",
        "exuberant",
        "destruction",
        "present"
      );
      matcha.expect(a).toBeInstanceOf(Arroz);

      var value = a.filter(function (word) {
        return word.length > 6;
      });
      matcha.expect(!!a.filter).toBe(true);
      matcha.expect(value.length).toBe(3);
      matcha.expect(value[0]).toBe("exuberant");
      matcha.expect(value[1]).toBe("destruction");
      matcha.expect(value[2]).toBe("present");

      matcha.expect(a.length).toBe(5);
      matcha.expect(a[0]).toBe("spray");
      matcha.expect(a[1]).toBe("elite");
      matcha.expect(a[2]).toBe("exuberant");
      matcha.expect(a[3]).toBe("destruction");
      matcha.expect(a[4]).toBe("present");
    });
  });
  matcha.describe("> some", function () {
    matcha.it(
      "should tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array.",
      function () {
        var a = new Arroz(1, 2, 3, 4, 5);
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.some(function (elem) {
          return elem > 3;
        });
        matcha.expect(!!a.some).toBe(true);
        matcha.expect(value).toBe(true);
        matcha.expect(a[0]).toBe(1);
        matcha.expect(a[1]).toBe(2);
        matcha.expect(a[2]).toBe(3);
        matcha.expect(a[3]).toBe(4);
        matcha.expect(a[4]).toBe(5);
        matcha.expect(a.length).toBe(5);
      }
    );
    matcha.it(
      " it finds an element for which the provided function returns true; otherwise it returns false. It doesnt modify the array",
      function () {
        var a = new Arroz(1, 2, 3, 4, 5);
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.some(function (elem) {
          return elem > 7;
        });
        matcha.expect(!!a.some).toBe(true);

        matcha.expect(value).toBe(false);
        matcha.expect(a[0]).toBe(1);
        matcha.expect(a[1]).toBe(2);
        matcha.expect(a[2]).toBe(3);
        matcha.expect(a[3]).toBe(4);
        matcha.expect(a[4]).toBe(5);
        matcha.expect(a.length).toBe(5);
      }
    );
  });
  matcha.describe("> every", function () {
    matcha.it(
      "should tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.",
      function () {
        var a = new Arroz(10, 20, 30, 40);
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.every(function (x) {
          return x < 50;
        });
        matcha.expect(!!a.every).toBe(true);

        matcha.expect(value).toBe(true);

        matcha.expect(a[0]).toBe(10);
        matcha.expect(a[1]).toBe(20);
        matcha.expect(a[2]).toBe(30);
        matcha.expect(a[3]).toBe(40);
        matcha.expect(a.length).toBe(4);
      }
    );
    matcha.it("should return false value.", function () {
      var a = new Arroz(10, 20, 30, 40);
      matcha.expect(a).toBeInstanceOf(Arroz);

      var value = a.every(function (x) {
        return x < 5;
      });
      matcha.expect(!!a.every).toBe(true);

      matcha.expect(value).toBe(false);

      matcha.expect(a[0]).toBe(10);
      matcha.expect(a[1]).toBe(20);
      matcha.expect(a[2]).toBe(30);
      matcha.expect(a[3]).toBe(40);
      matcha.expect(a.length).toBe(4);
    });
  });

  matcha.describe("> find", function () {
    matcha.it(
      "should returns the first element in the provided array that satisfies the provided testing function.",
      function () {
        var a = new Arroz("50", "60", "70", "80", "90");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.find(function (elem) {
          return elem > 75;
        });

        matcha.expect(!!a.find).toBe(true);
        matcha.expect(value).toBe("80");
      }
    );
    matcha.it(
      "should returns the first element in the provided, If no values satisfy the testing function, undefined is returned",
      function () {
        var a = new Arroz("50", "60", "70", "80", "90");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.find(function (elem) {
          return elem < 45;
        });

        matcha.expect(!!a.find).toBe(true);
        matcha.expect(value).toBe(undefined);
      }
    );
  });
  matcha.describe("> with", function () {
    matcha.it(
      "It returns a new array with the element at the given index replaced with the given value.",
      function () {
        var a = new Arroz(1, 2, 3, 4, 5);
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.with(2, "X");
        matcha.expect(!!a.with).toBe(true);
        matcha.expect(value[0]).toBe(1);
        matcha.expect(value[1]).toBe(2);
        matcha.expect(value[2]).toBe("X");
        matcha.expect(value[3]).toBe(4);
        matcha.expect(value[4]).toBe(5);
      }
    );
  });

  matcha.describe("> reduce", function () {
    matcha.it(
      "should show the final result of running the reducer across all elements of the array is a single value",
      function () {
        var a = new Arroz(1, 2, 3, 4);
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.reduce(function (acc, currValue) {
          return acc + currValue;
        });
        matcha.expect(!!a.reduce).toBe(true);
        matcha.expect(value).toBe(10);
      }
    );
  });
  matcha.describe("> includes", function () {
    matcha.it(
      "Includes a certain value among its entries, returning true or false as appropriate.",
      function () {
        var a = new Arroz("cat", "dog", "donkey", "horse");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.includes("donkey");
        matcha.expect(!!a.includes).toBe(true);

        matcha.expect(value).toBe(true);

        var value2 = a.includes("maria");
        matcha.expect(value2).toBe(false);

        matcha.expect(a[0]).toBe("cat");
        matcha.expect(a[1]).toBe("dog");
        matcha.expect(a[2]).toBe("donkey");
        matcha.expect(a[3]).toBe("horse");
      }
    );
    matcha.it(
      "Zero-based index at which to start searching, converted to an integer.",
      function () {
        var a = new Arroz("cat", "dog", "donkey", "horse");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.includes("donkey", 1);
        matcha.expect(!!a.includes).toBe(true);

        matcha.expect(value).toBe(true);

        var value2 = a.includes("maria");
        matcha.expect(value2).toBe(false);

        matcha.expect(a[0]).toBe("cat");
        matcha.expect(a[1]).toBe("dog");
        matcha.expect(a[2]).toBe("donkey");
        matcha.expect(a[3]).toBe("horse");
      }
    );

    matcha.it(
      "should return with negative index counts back from the end of the array ",
      function () {
        var a = new Arroz("cat", "dog", "donkey", "horse");
        matcha.expect(a).toBeInstanceOf(Arroz);

        var value = a.includes("donkey", -3);
        matcha.expect(!!a.includes).toBe(true);

        matcha.expect(value).toBe(true);

        var value2 = a.includes("maria", -20);
        matcha.expect(value2).toBe(true);

        matcha.expect(a[0]).toBe("cat");
        matcha.expect(a[1]).toBe("dog");
        matcha.expect(a[2]).toBe("donkey");
        matcha.expect(a[3]).toBe("horse");
      }
    );
  });
});
