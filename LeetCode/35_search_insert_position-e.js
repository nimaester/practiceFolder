// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the
// index if the target is found. If not, return the index where it would be if
// it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

const searchInsertPosition = (arrOfNums, target) => {
  let left = 0;
  let right = arrOfNums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let currentNum = arrOfNums[mid];
    if (currentNum === target) return mid;
    target < currentNum ? (right = mid - 1) : (left = mid + 1);
  }
  return left;
};

console.log(searchInsertPosition([1, 3, 5, 6], 7));
