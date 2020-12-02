// starting from index 0, bubble sort puts all the largest value to the end of the array

const bubblesort = (array) => {

  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    array.forEach((num, idx) => {
      let cur = num;
      let nex = array[idx + 1];
      if (cur > nex) {
        array[idx] = nex;
        array[idx + 1] = cur;
        unsorted = true;
      }
    })
  }
  return array;
}

let arrays = [2 ,3, 1, 0, 6, 4, 5];
console.log(bubblesort(arrays));
