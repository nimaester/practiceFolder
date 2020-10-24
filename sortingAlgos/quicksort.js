let pivot = (array, start=0, end=array.length+1) => {

  let swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = array[start];
  let swapIdx = start;

  for (let i = start + 1; i < array.length; i ++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i)
    }
  }
  swap(array, start, swapIdx)
  return swapIdx;
}

// console.log(pivot([2,3,4,1,0]))

const quicksort = (arr, left=0, right=arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quicksort(arr, left, pivotIdx - 1);
    quicksort(arr, pivotIdx+1, right);
  }
  return arr;
}

console.log(quicksort([3,2,1,4,5,0]))