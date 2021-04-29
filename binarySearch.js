// Binary search only works with sorted arrays;

// [1,2,3,4,5]

/*

keep splitting arrays into left and right
left means numbers less than or equal to the target, right means numbers more than or equal to target
we get the mid of the array by using math.floor(array.length / 2)
then we check if the target is less/equalto last index of left arr or more/equalto beginning index of right arr


*/
const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (array[mid] === target) {
      return mid;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
    console.log(start, mid, end);
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 0));
