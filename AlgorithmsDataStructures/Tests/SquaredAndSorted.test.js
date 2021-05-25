const squaredAndSorted = require("../squaredAndSorted");

describe("#squareAndSorted scenario 1", () => {
  test("returns an empty array if the array is empty", () => {
    expect(squaredAndSorted([])).toEqual([]);
  });

  describe("#squareAndSorted scenario 2", () => {
    test("returns the sorted array with negative integers", () => {
      expect(squaredAndSorted([-3, 1, 3, 5, -9, 0])).toEqual([
        0,
        1,
        9,
        9,
        25,
        81,
      ]);
    });
  });
});
