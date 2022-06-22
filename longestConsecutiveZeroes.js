const nums = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];

const consecutiveZeroes = (arr) => {
  let start = 0;
  let end = 0;
  let longest = 0;
  let currentLongest = 0;

  while (end < arr.length - 1) {
    console.log(arr[start], arr[end], longest, currentLongest);
    if (arr[end] === 0) {
      currentLongest = end - start;
      end += 1;
      if (currentLongest > longest) longest = currentLongest;
    } else {
      start = end;
      currentLongest = 0;
      end = start += 1;
    }
  }
  return longest === 0 ? 0 : longest + 1;
};

console.log(consecutiveZeroes(nums));
