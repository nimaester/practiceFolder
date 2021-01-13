// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
// Output: [0,1,2,3,4]
// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]

// Example 3:
// Input: nums = [1], index = [0]
// Output: [1]

// Constraints:

// 1 <= nums.length, index.length <= 100
// nums.length == index.length
// 0 <= nums[i] <= 100
// 0 <= index[i] <= i

const createTargetArray = (nums, index) => {
  let result = [];
  for (n in index) {
    result.splice(index[n], 0, nums[n])
    console.log(result)
  }
  return result;
};

console.log(createTargetArray([1,2,3,4], [3,2,1,0]))