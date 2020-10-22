// insertion sort gradually builds the sort while iterating each element in the array/
/*
[[4],[2], 1, 3] => [2, 4, 1, 3]
[2 , [4], [1], 3] => [2, 1, 4, 3]
[[2], [1], 4, 3] => [1, 2, 4, 3]
[1, 2, [4], [3]] => [1, 2, 3, 4]

// we start comparing the first 2 numbers and check which is smaller
// we can have 2 different indices (i, j)
// i will represent current number, j will represent next number
// if j is more than i, swap them
// if a swap is made then j will go back to check the previous elements
// if no swap is made then increment i;
// j will keep going back until theres no more numbers bigger than j. should stop at index 0
// return the sorted array
*/


const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i ++) {
    let currNum = arr[i];
    let j = i - 1;
    while (arr[j] > currNum && j >= 0) {
      arr[j + 1] = arr[j];
      arr[j] = currNum
      j --;
      // console.log(arr, j);
    }
    arr[j + 1] = currNum
  }
  return arr

};

let arrays = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(insertionSort(arrays));
