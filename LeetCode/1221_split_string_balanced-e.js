// 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.

const balancedStringSplit = (str) => {
  let letterCount = { R: 0, L: 0 };
  let count = 0;
  for (let char of str) {
    letterCount[char]++;
    if (letterCount.R === letterCount.L) {
      count++;
      let letterCount = { R: 0, L: 0 };
    }
  }
  return count;
};

console.log(balancedStringSplit("RLRRRLLRLL"));
