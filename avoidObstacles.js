// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

function avoidObstacles(inputArray) {
  /*

  take the biggest number in the array
  keep increasing current total until its is bigger than max
  if numbers on the array are equal to current total
      increase the number being added by one
      reset curent total to 0
  loop will end if the current total is greater that max
  return the number being added
  */
  let currentNum = 0;
  let i = 1;

  const max = Math.max(...inputArray);

  while (currentNum < max) {
    currentNum += i;
    if (inputArray.includes(currentNum)) {
      currentNum = 0;
      i += 1;
    }
  }
  return i;
}

console.log(avoidObstacles([5, 3, 6, 7, 9])); // 4
