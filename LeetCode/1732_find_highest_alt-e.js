// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Example 1:
// Input: gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

// Example 2:
// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

/**
 * @param {number[]} gain
 * @return {number}
 */

 // reduce method approach
var largestAltitude = function (gain) {
  let maxGain = 0;
  gain.reduce((curNum, nextNum) => {
    maxGain = curNum + nextNum >= maxGain ? curNum + nextNum : maxGain;
    return curNum + nextNum;
  }, 0);
  return maxGain;
};

// for loop approach
const largestAltitude2 = (gain) => {
  let max = 0;
  let currentAlt = 0;
  for (let i = 0; i < gain.length; i ++) {
    let num = gain[i];
    currentAlt += num;
    if (currentAlt >= max) {
      max = currentAlt;
    }
  }
  return max;
}

//recursive appraoch *** faster than the 2 above
let largestAltitude3 = (gain) => {
  let max = 0;
  let curAlt = 0;
  const findLargestAlt = (gain, alt) => {
    if (gain.length === 0) {
      return max;
    }
    alt += gain.shift();
    if (alt >= max) {
      max = alt;
    }
    return findLargestAlt(gain, alt);
  }
  return findLargestAlt(gain, curAlt);
}

console.log(largestAltitude3([-5,1,5,0,-7]))
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))