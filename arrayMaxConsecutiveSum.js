// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example
// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// solution(inputArray, k) = 8.

// All possible sums of 2 consecutive elements are:
// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.

// Input/Output

// [execution time limit] 4 seconds (js)
// [input] array.integer inputArray
// Array of positive integers.

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// 1 ≤ inputArray[i] ≤ 1000.

// [input] integer k

// An integer (not greater than the length of inputArray).

// Guaranteed constraints:
// 1 ≤ k ≤ inputArray.length.

// [output] integer

// The maximal possible sum.

// naive solution 0(n2)
const arrayMaxConsecutiveSum = (array, k) => {
  if (k === 0) return 0;
  if (k === 1) return Math.max(...array);

  let maxSum = 0;
  for (let i = 0; i < array.length; i++) {
    let segmentSum = array.slice(i, i + k).reduce((sum, val) => (sum += val));
    if (segmentSum > maxSum) maxSum = segmentSum;
  }

  return maxSum;
};

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

// rolling sum, 0(n)
const arrayMaxConsecutiveSum2 = (array, k) => {
  if (k === 0) return 0;
  if (k === 1) return Math.max(...array);

  let currentSum = array.slice(0, k).reduce((sum, val) => (sum += val));
  let maxSum = currentSum;
  for (let i = 0; i < array.length; i++) {
    currentSum = currentSum - array[i] + array[i + k];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
