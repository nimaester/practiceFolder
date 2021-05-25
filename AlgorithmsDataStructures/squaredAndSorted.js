// Suppose there is an ordered list of integers. Please implement a method to:
// 1. Square each element.
// 2. Generate a new ordered list.

// PSEUDOCODE
// Input = array
// Output = sorted squared array
// Constraints = what is the length of the array? 1000+ or less
//
// Edge Cases = negative numbers? positive numbers? floats?

// we iterate the array
// as we take a look at each num in the array we multipy it by itself
// save the squared array in a variable
// for sorting the squared array, we can use helper function to the square array
// return the result of running the sorting helper function to the squared array

// HELPER FUNCTION
// we iterate the array starting from the second number in the array (we start at second because we will decrement our position if a condition is met)
// make variable to corespond as our position in the array;
// while our position is not the end of the array we check if the first number is more than second number
// if it is we swap the two numbers then we decrement our position to the previous position
// if the first number is less than the second number then we increment our position
// once all the numbers have been checked we return our new array

const sortArray = (array) => {
  let i = 1;

  while (i < array.length) {
    let j = i - 1;
    let firstNum = array[j];
    let secondNum = array[i];
    if (firstNum > secondNum) {
      array[i - 1] = secondNum;
      array[i] = firstNum;
      i--;
    } else {
      i++;
    }
  }
  return array;
};

const squaredAndSorted = (array) => {
  if (array.length === 0) {
    return [];
  }
  let squaredArray = array.map((num) => num ** 2);
  return sortArray(squaredArray);
};

module.exports = squaredAndSorted;
