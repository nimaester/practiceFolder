/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function (arr) {
  const counts = new Map();
  arr.forEach((num) =>
    counts.has(num) ? counts.set(num, counts.get(num) + 1) : counts.set(num, 1)
  );
  for (let num of counts) {
    if (num[1] % 2 === 0) return num[0];
  }
  return null;
};

console.log(evenOccurrence([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]));
