// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:
// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:
// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

// first attempt
let helper = (array, number) => {
  let count = 0;
  array.forEach((ele, i) => {
    if (ele < number) {
      count ++;
    }
  })
  return count;
}

const smallerNumbersThanCurrent = (array) => {

  let result = [];
  array.forEach((element, i) => {
    result.push(helper(array, element))
  })
  return result;
}

//second attempt
const smallerNumbersThanCurrent = (array) => {
  let result = [];
  array.forEach((num1) => {
    let count = 0;
    array.forEach((num2) => {
      if (num2 < num1) {
        count ++;
      }
    })
    result.push(count);
  })
  return result;
}

// optimal solution
const smallerNumbersThanCurrent = (array) => {
  let arrayCopy = array.slice();
  let sortedArray = arrayCopy.sort((a, b) => (a - b));
  return array.map((num) => (sortedArray.indexOf(num)));
}
console.log(smallerNumbersThanCurrent([7,7,7,7]))
console.log(smallerNumbersThanCurrent([6,5,4,8]))