// Implement a function called countUniqueValues which accepts a sorted
// array and counts the unique countUniqueValuesin the array. There can
// be negative numbers in the array but will always be sorted
// use the multiple pointers pattern
// Effecient because we only go through the array once

// [1,1,1,2,3,3,4,4]

let counter = (array) => {
  let counts = {};
  for (let num of array) {
    !counts[num] ? (counts[num] = 1) : null;
  }
  return counts;
};

const countUniqueValuesNaive = (array) => {
  let counts = counter(array);
  let unique = 0;
  for (let key in counts) {
    if (counts[key]) {
      unique++;
    }
  }
  return unique;
};

// Effecient because we only go through the array once
const countUniqueValues = (array) => {
  let i = 0; // 1
  let j = 1; // 1
  while (j < array.length) {
    if (array[i] === array[j]) {
      j++;
    } else if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
      j++;
    }
  }
  return i + 1;
};

// using a loop, same concept
const countUniqueValues2 = (array) => {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValuesNaive([1, 1, 1, 2, 3, 3, 4, 4, 5]));
