// Write a function called squared, which accpets two arays, THe function should return true if every value in the arrray has its correspoding value squared in the second array. The frequency of values must be the same. Order does not matter but the frequency should be the same

// make sure the lengths are equal, if not return false
// iterate the first array and square each of the numbers
// we need to keep track of the number of squares
// we can use an object to take the squared value and the occurence of that value
// we iterate the second array and see if the numbers are present in our object
// if it is minus 1 from the object
// if its not return false
// when we finish checking the second array and the square and freq are equal return true

const countFrequenciesSquared = (array, type = "normal") => {
  let freqs = {};
  for (let num of array) {
    if (freqs[num]) {
      if (type === "squared") {
        freqs[num ** 2]++;
      } else {
        freqs[num]++;
      }
    } else {
      if (type === "squared") {
        freqs[num ** 2] = 1;
      } else {
        freqs[num] = 1;
      }
    }
  }
  return freqs;
};

const squared = (arr1, arr2) => {
  let freqs1 = countFrequenciesSquared(arr1, "squared");
  let freqs2 = countFrequenciesSquared(arr2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let num of arr1) {
    if (freqs1[num] !== freqs2[num]) {
      return false;
    }
  }
  return true;
};

console.log(squared([1, 2, 3], [4, 1, 9]));
console.log(squared([1, 2, 3], [1, 9]));
console.log(squared([1, 2, 1], [4, 4, 1]));
