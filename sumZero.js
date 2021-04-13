const sumZero = (array) => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let sum = array[start] + array[end];
    if (sum === 0) {
      return [array[start], array[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
};

console.log(sumZero([]));
