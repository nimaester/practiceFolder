// 1822. Sign of the Product of an Array

// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

// @param {number[]} nums
// @return {number}

var arraySign = function (nums) {
  if (nums.includes(0)) {
    return 0;
  }

  let numberOfPos = nums.filter((num) => num < 0);
  if (numberOfPos.length % 2 === 0) {
    return 1;
  } else {
    return -1;
  }
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));

// go through array once solution

const arraySign2 = (array) => {
  let negativeCount = 0;
  array.forEach((num) => {
    if (num === 0) {
      return 0;
    } else if (num < 0) {
      negativeCount++;
    }
  });

  return negativeCount % 2 === 0 ? 1 : -1;
};

console.log(arraySign2([-1, -2, -3, -4, 3, 2, 1]));
