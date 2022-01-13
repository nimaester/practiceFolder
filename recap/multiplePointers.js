// Write a function called sumZero which accepts a sorted array of integers. The
// function should find the first pair of integers where the sum is 0. Return an array that
// includes both values that sum to zero or false if pair does not exists

const sumZero = (arr) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
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

const uniqueValues = (arr) => {
  let i = 0;
  let uniques = 0;
  if (arr.length === 0) return uniques;
  if (arr.length === 1) return uniques + 1;
  for (let j = 1; j < arr.length; j++) {
    let num1 = arr[i];
    let num2 = arr[j];
    if (num1 !== num2) {
      uniques++;
      i = j;
    }
  }
  return uniques + 1; // accounting the first number that is unique
};

console.log(uniqueValues([1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6]));

// best case scenario o(n) n = number of items in array
