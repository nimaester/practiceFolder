// Write an efficient algorithm that searches for a value target in an m x n
//  integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the
// previous row.

// Example 1:
// Input: matrix =
// [[1, 3, 5, 7],
//  [10,11,16,20],
//  [23,30,34,60]],
//  target = 3
// Output: true

const search2DMatrix = (matrix, target) => {
  let max = matrix[0].length - 1;
  let start = 0;
  let end = matrix.length - 1;
  let mid;

  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (matrix[mid].includes(target)) return true;
    if (target < matrix[mid][max]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return matrix[start].includes(target);
};

console.log(
  search2DMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    0
  )
);
