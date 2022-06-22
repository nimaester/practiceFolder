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

console.log(isPalindrome(1111));
