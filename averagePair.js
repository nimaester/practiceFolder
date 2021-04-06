// Multiple Pointers - Average Pair

// Write a function called averagePair. Given a sorted array of integers and a target average, detemine if there is a pair of values in the array where the average of the pair equals the taret average. There may be more than one pair that matches the average target

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

const averagePair = (array, avgTarget) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let avg = (array[start] + array[end]) / 2;
    if (avg === avgTarget) {
      return true;
    } else if (avg < avgTarget) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([], 4)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //true
