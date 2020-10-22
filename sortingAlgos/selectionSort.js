const selectionSort = (array) => {
  for (let i = 0; i < array.length; i ++) {
    let min = i;
    for (let j = i + 1; j < array.length; j ++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let currentEle = array[i];
      array[i] = array[min];
      array[min] = currentEle;
    }
  }
  return array;
}

const arr = [5,3,1,0,2,4,6,7];

console.log(selectionSort(arr));
