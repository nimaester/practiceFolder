// Multiple Pointers - Average Pair

// Write a function called averagePair. Given a sorted array of integers and a target average, detemine if there is a pair of values in the array where the average of the pair equals the taret average. There may be more than one pair that matches the average target

// take the first number and take the average of that and the other numbers in the array
// if the target avg is found return true
// if not keep going checking the other numbers with the primary number.
// if all primary numbers are check and target avg not found return false

function averagePair2(array, avg) {
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0 || array.length === 1) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    let primaryNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondaryNum = array[j];
      if ((primaryNum + secondaryNum) / 2 === avg) {
        return true;
      }
    }
  }
  return false;
}

// take advantage of the sorted array
// if the current average of first and last number in the array is less than target average, increase the position of the first number so the average will be greated next iteration.
// if the current average is more than target average, move the end position to the left so we can reduce the average.
// if the avg of the two numbers are not found or start postion is more than the end position, return false

const averagePair = (array, avgTarget) => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let currentAvg = (array[start] + array[end]) / 2;
    if (currentAvg === avgTarget) {
      return true;
    } else if (currentAvg < avgTarget) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([], 4)); //false
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
