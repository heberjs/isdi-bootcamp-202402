describe("Collection", function () {
  describe("constructor", function () {
    it("creates a collection", function () {
      var cars = new Collection("cars");

      expect(cars).toBeInstanceOf(Collection);
    });
  });

  describe(">helpers", function () {
    describe("_.generateId", function () {
      it("generates a random id", function () {
        var cars = new Collection("cars");
        var id1 = cars._generateId();

        expect(typeof id1).toBe("string");
        var id2 = cars._generateId();

        expect(typeof id2).toBe("string");

        expect(id1 === id2).toBe(false);
      });
    });
    describe("_loadDocuments", function () {
      it("loads empty array on new collection", function () {
        delete localStorage.cars;

        var cars = new Collection("cars");
        var documents = cars._loadDocuments();

        expect(documents).toBeInstanceOf(Array);
        expect(documents.length).toBe(0);
      });

      it("loads data on non-empty collection", function () {
        localStorage.cars =
          '[{"brand":"porsche","model":"911"},{"brand":"fiat","model":"500"}]';

        var cars = new Collection("cars");

        var documents = cars._loadDocuments();

        expect(documents).toBeInstanceOf(Array);
        expect(documents.length).toBe(2);

        var document = documents[0];
        expect(document).toBeInstanceOf(Object);
        expect(document.brand).toBe("porsche");
        expect(document.model).toBe("911");

        var document = documents[1];
        expect(document.brand).toBe("fiat");
        expect(document.model).toBe("500");
      });
    });
    describe("._saveDocuments", function () {
      it("saves a collection", function () {
        delete localStorage.cars;
      });
    });
  });
});
