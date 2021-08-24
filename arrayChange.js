// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

function arrayChange(inputArray) {
  /*

  we iterate the array and check if the next value is greater than the current value
  if its not we increment the value by one until its greater than the prev value
  increment our counter
  if next value > than prev, then we move on to the next iteration
  return counter

  */

  let counter = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let cur = inputArray[i];
    let next = inputArray[i + 1];

    if (next <= cur) {
      while (inputArray[i + 1] <= inputArray[i]) {
        counter++;
        inputArray[i + 1] += 1;
      }
    }
  }
  return counter;
}
