var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const bad = (n, bad) => {
  let left = 1;
  let right = n;
  let mid;
  let min;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    console.log(left, right, mid, min);
    if (bad === mid) {
      min = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return min;
};

// console.log(searchInsert([1, 3, 5, 6], 2));
console.log(bad(3, 1));
