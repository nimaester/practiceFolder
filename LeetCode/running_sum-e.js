//ForLoop
var runningSum = function(nums) {
  let sumArray = [];
  let total = 0;
  for (let i = 0; i < nums.length; i ++) {
      total += nums[i];
      sumArray.push(total);
  }
  return sumArray;
};

//Recursive
var runningSum = function(nums) {
  let totalArray = [];
  let sliceAndAdd =  (array, total) => {
      if (!array.length) {
          return totalArray;
      }
      totalArray.push(total += array[0]);
      return sliceAndAdd(array.slice(1), total);
  }
  return sliceAndAdd(nums, 0)
}

var runningSum = function(nums) {

  let total = 0;
  for (let i = 1; i < nums.length; i ++) {
    total += nums[i];
    nums[i] = total;
  }
  return nums;
}


console.log(runningSum2([1,2,3,4]))