// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
  let longestLength = 0;

  if (inputArray.length > 0) {
    for (let i = 0; i < inputArray.length; i++) {
      let word = inputArray[i];
      if (word.length > longestLength) {
        longestLength = word.length;
      }
    }

    return inputArray.filter((word) => word.length === longestLength);
  }
}

let input = ["aba", "aa", "ad", "vcd", "aba"];
console.table(allLongestStrings(input));
