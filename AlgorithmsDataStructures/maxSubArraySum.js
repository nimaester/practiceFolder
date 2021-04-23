// Write a function that accepts an array of integers and a number called n. The function should calculate
// the maximum sum of n consecutive elements in the array.

// naive solution
const maxSubArraySum = (array, n) => {
  if (n > array.length) {
    return null;
  }

  let maxNum = 0;

  for (let i = 0; i < array.length; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += array[i + j];
    }
    if (temp > maxNum) {
      maxNum = temp;
    }
  }
  return maxNum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
