// starting from index 0, bubble sort puts all the largest value to the end of the array

const bubblesort = (array) => {

  let unsorted = true;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < array.length; i ++) {
      let currentNum = array[i];
      let nextNum = array[i + 1];
      if (currentNum > nextNum) {
        array[i + 1] = currentNum;
        array[i] = nextNum;
        unsorted = true;
      }
    }
  }
  return array;
}

let arrays = [2 ,3, 1, 0, 6, 4, 5];
console.log(bubblesort(arrays));
