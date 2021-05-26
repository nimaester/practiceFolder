const squaredAndSorted = require("../squaredAndSorted");

describe("#squareAndSorted scenario 1", () => {
  test("returns an empty array if the array is empty", () => {
    expect(squaredAndSorted([])).toEqual([]);
  });

  describe("#squareAndSorted scenario 2", () => {
    test("returns the sorted array with negative integers", () => {
      expect(squaredAndSorted([-3, 1, 5, -9, 0])).toEqual([0, 1, 9, 25, 81]);
    });
  });

  describe("#squareAndSorted scenario 3", () => {
    test("returns sorted array with positive numbers", () => {
      expect(squaredAndSorted([7, 1, 9, 2, 6])).toEqual([1, 4, 36, 49, 81]);
    });
  });
});
