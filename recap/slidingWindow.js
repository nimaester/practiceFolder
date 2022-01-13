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

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// best case scenario is o(n) where n = number of numbers in arr
