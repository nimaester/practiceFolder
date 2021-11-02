const isPalindrome = (str) => {
  // convert str to lowercase and remove all non alpha
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  // set left and right
  let left = 0;
  let right = str.length - 1;
  // use a loop to
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man a Plan a canal: Panama"));
