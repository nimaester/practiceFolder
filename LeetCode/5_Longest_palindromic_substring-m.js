const isPalidrome = (str) => {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};

const longestPalidromeSubstring = (str) => {
  for (let m = str.length; m > 0; m--) {
    let i = 0;
    let j = m;
    while (j <= str.length) {
      let substring = str.slice(i, j);
      if (isPalidrome(substring)) return substring;
      else {
        i++;
        j++;
      }
    }
  }
  return "";
};

console.log(isPalidrome("eaa"));
console.log(longestPalidromeSubstring("babad"));
