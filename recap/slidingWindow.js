const maxSubArraySum = (arr, num) => {
  if (arr.length < num) return null;
  let i = 0;

  let maxSum = arr.slice(0, num).reduce((acc, val) => acc + val);
  let tempMaxSum = maxSum;

  for (let j = num; j < arr.length; j++) {
    tempMaxSum = tempMaxSum - arr[i] + arr[j];
    if (tempMaxSum > maxSum) maxSum = tempMaxSum;
    i++;
  }
  return maxSum;
};

// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// best case scenario is o(n) where n = number of numbers in arr

// SLiding Window minSubArraySum
// Write a function which accpets an array and a number that returns the minimal
// length of a consecutive subarray of which the sum is greater than or equal to the number
// passed to the function. If theres none return 0

const minSubArraySum = (arr, num) => {
  let i = 0;
  let j = 1;
  let currentSum = arr[i] + arr[j];
  let shortest = null;
  let currentShortest = 0;

  while (j < arr.length) {
    if (currentSum < num) {
      j++;
      currentSum += arr[j];
    } else if (currentSum >= num) {
      currentShortest = j - i + 1;
      if (shortest === null || currentShortest < shortest) {
        shortest = currentShortest;
        if (shortest === 1) return shortest;
      }
      currentSum = currentSum - arr[i];
      i++;
    }
  }
  return shortest === null ? 0 : shortest;
};

console.log(minSubArraySum([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
