var removeDuplicates = function (nums) {
  let len = 0;
  let pos = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[pos] !== nums[i]) {
      len++;
      pos = i;
    }
  }
  return len;
};
