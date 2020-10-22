const isPalindrome = (string) => {
  // add whatever parameters you deem necessary - good luck!
  let reverse = "";
  let originalString = string;

  const reverseTheWord = (string) => {
    if (!string.length) {
      return reverse === originalString;
    }

    reverse = string[0] + reverse;
    return reverseTheWord(string.slice(1));
  };
  return reverseTheWord(string);
};

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false
