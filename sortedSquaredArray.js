// square all of the numbers in the given array
// return the sorted result of the squared numbers in the  array

// less optimized solution
const sortedSquaredArray = (array) => {
  let newArray = array.map((num) => num ** 2);
  return newArray.sort((a, b) => a - b);
};

// optimized solution, one pass through the array using multiple pointers
const sortedSquaredArray2 = (array) => {
  let sortedSquared = [];
  let start = 0;
  let end = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[start]) > Math.abs(array[end])) {
      sortedSquared.unshift(array[start] ** 2);
      start++;
    } else {
      sortedSquared.unshift(array[end] ** 2);
      end--;
    }
  }
  return sortedSquared;
};
