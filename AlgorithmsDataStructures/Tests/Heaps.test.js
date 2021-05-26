const MaxBinaryHeap = require("../DataStructures/Heaps");

describe("#insert", () => {
  test("returns an array that follows the max binary heap pattern", () => {
    let mbh = new MaxBinaryHeap();
    mbh.insert(99);
    mbh.insert(40);
    mbh.insert(55);
    mbh.insert(88);
    expect(mbh.values).toEqual([99, 88, 55, 40]);
  });

  describe("#removeMax", () => {
    test("returns the removed root value", () => {
      let mbh = new MaxBinaryHeap();
      mbh.insert(2);
      mbh.insert(3);
      mbh.insert(55);
      expect(mbh.removeMax()).toBe(55);
    });
  });

  describe("removing from an empty heap", () => {
    test("returns null if using removeMax from an empty heap", () => {
      let mbh = new MaxBinaryHeap();
      expect(mbh.removeMax()).toBeNull();
    });
  });

  describe("sifting down the values from the heap", () => {
    test("returns an array of heap values in proper order", () => {
      let mbh = new MaxBinaryHeap();
      mbh.insert(5);
      mbh.insert(35);
      mbh.insert(17);
      mbh.insert(85);
      mbh.insert(12);
      mbh.insert(8);
      mbh.removeMax();
      expect(mbh.values).toEqual([35, 12, 17, 5, 8]);
    });
  });
});
