const sumZero = (array) => {
  let first = 0;
  let last = array.length - 1;
  while (first < last) {
    let sum = array[first] + array[last];
    if (sum === 0) {
      return [array[first], array[last]];
    } else if (sum > 0) {
      last--;
    } else {
      first++;
    }
  }
};

// console.log(sumZero([-1, -2, -3, 4, 5, 1]));
