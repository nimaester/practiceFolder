const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentNum) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currentNum;
  }
  return arr;
};

let arrays = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(insertionSort(arrays));
