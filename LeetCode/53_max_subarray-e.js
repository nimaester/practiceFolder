// 53. Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has 
// the largest sum and return its sum.



const maxSubArray = (arrayOfNums) => {
  let currentMax = arrayOfNums[0];
  let max = arrayOfNums[0];
  for (let i = 1; i < arrayOfNums.length; i++) {
    currentMax = Math.max(arrayOfNums[i], currentMax + arrayOfNums[i]);
    if (currentMax > max) {
      max = currentMax;
    }
  }
  return max;
};


console.log(maxSubArray([5,4,-1,7,8]))
