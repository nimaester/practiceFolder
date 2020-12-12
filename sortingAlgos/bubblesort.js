// starting from index 0, bubble sort puts all the largest value to the end of the array

const bubblesort = (arr) => {

  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    arr.forEach((num, idx) => {
      let cur = num;
      let nex = arr[idx + 1];
      if (cur > nex) {
        arr[idx] = nex;
        arr[idx + 1] = cur;
        unsorted = true;
      }
    })
  }
  return arr;
}

let array = [2 ,3, 1, 0, 6, 4, 5];
console.log(bubblesort(array));
