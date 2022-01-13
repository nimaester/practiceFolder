// Write a function called sumZero which accepts a sorted array of integers. The
// function should find the first pair of integers where the sum is 0. Return an array that
// includes both values that sum to zero or false if pair does not exists

const sumZero = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    // 2 < 2
    if (arr[i] + arr[j] === 0) {
      // 0 + 1 == 1
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > 0) {
      // 1 > 0
      j--;
    } else {
      i++;
    }
  }
  return false;
};

console.log(sumZero([-3, -2, 0, 1, 2, 3]));

// best case scenario 0(1)
// worst case is 0(n) n = number of elements in the array
