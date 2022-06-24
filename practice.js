const isPalindrome = (num) => {
  const strNum = String(num);
  let left = 0;
  let right = strNum.length - 1;

  while (left < right) {
    if (strNum[left] !== strNum[right]) return false;
    else left++, right--;
  }
  return true;
};

// console.log(isPalindrome(1111));

const bubblesort = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      let nextNum = arr[i + 1];
      if (num > nextNum) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
};

const merge = (left, right) => {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    let leftNum = left[leftIdx];
    let rightNum = right[rightIdx];
    if (leftNum < rightNum) {
      result.push(leftNum);
      leftIdx++;
    } else {
      result.push(rightNum);
      rightIdx++;
    }
    return [...result, ...left.slice(leftIdx), ...right.slice(rightIdx)];
  }
};

const mergesort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergesort([3, 4, 1, 2, 8, 0]));
