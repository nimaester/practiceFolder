let HashTable = require("../DataStructures/HashTable");

describe("#set", () => {
  test("adds a new key/ value pair to a Hash Table", () => {
    let ht = new HashTable();
    ht.set("apple", "red");
    ht.set("banana", "yellow");
    ht.set("grape", "purple");
    ht.set("kiwi", "green");
    expect(ht.get("banana")).toBe("yellow");
  });

  describe("handle similar keys", () => {
    test("updates the value if a similar key is used", () => {
      let ht = new HashTable();
      ht.set("apple", "red");
      ht.set("apple", "green");
      expect(ht.get("apple")).toBe("green");
    });
  });

  describe("#keys", () => {
    test("gets all the keys in the HashTable ", () => {
      let ht = new HashTable();
      ht.set("apple", "red");
      ht.set("banana", "yellow");
      ht.set("grape", "purple");
      expect(ht.keys()).toEqual(["apple", "banana", "grape"]);
    });
  });

  describe("#values", () => {
    test("gets all the values in the Hash Table", () => {
      let ht = new HashTable();
      ht.set("apple", "red");
      ht.set("banana", "yellow");
      ht.set("grape", "purple");
      expect(ht.values()).toEqual(["red", "yellow", "purple"]);
    });
  });
});
