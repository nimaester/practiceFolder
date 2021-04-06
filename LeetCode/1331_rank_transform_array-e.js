// 1331. Rank Transform of an Array

// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// @param {number[]} arr
// @return {number[]}

var arrayRankTransform = function (arr) {
  let unique = [...new Set(arr)];
  let sorted = unique.sort((a, b) => a - b);
  let rankedArr = [];

  for (let num of arr) {
    rankedArr.push(sorted.indexOf(num) + 1);
  }
  return rankedArr;
};

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]

// Input: arr = [100,100,100]
// Output: [1,1,1]

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]
