// Given an integer array and a window of size w, find the
// current maximum value in the window as it slides through
// the entire array.

//Example 1
// w = 2, arr = [-4, 5, 4, -4, 4, 6, 7]
// expected = [5, 5, 4, 4, 6, 7]

// Example 2
// w = 10, arr = [-4, 5, 4, -4, 4 , 6, 7]
// expected = [7]

const findMaxSlidingWindow = (nums, w) => {
  if (w > nums.length) return [Math.max(...nums)];
  let i = 0;
  let j = i + w - 1;
  let currentWindow;
  let result = [];
  while (j < nums.length) {
    currentWindow = nums.slice(i, j + 1);
    result.push(Math.max(...currentWindow));
    i++;
    j++;
  }
  return result;
};

console.log(findMaxSlidingWindow([-4, 5, 4, -4, 4, 6, 7], 10));
console.log(findMaxSlidingWindow([-4, 5, 4, -4, 4, 6, 7], 2));
