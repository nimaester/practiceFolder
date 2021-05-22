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
});
