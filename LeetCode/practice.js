var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else if (x === 0) {
    return true;
  }

  let initialValue = x;
  return String(x).reverse;
};

console.log(isPalindrome(121));
