// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

const numIdenticalPairs = (array) => {

  let count = 0;
  for (let i =0; i < array.length; i ++) {
    let num1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j]
      if (num1 === num2) {
        count ++;
      }
    }
  }
  return count;
}


console.log(numIdenticalPairs([1,1,1,1]))
console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,2,3,4,5]))