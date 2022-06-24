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

console.log(bubblesort([3, 4, 1, 2, 8, 0]));
