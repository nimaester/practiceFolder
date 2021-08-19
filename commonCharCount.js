// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

const counter = (str) => {
  let count = {};
  for (let char of str) {
    count[char] ? count[char]++ : (count[char] = 1);
  }
  return count;
};

function commonCharacterCount(s1, s2) {
  let commonChars = 0;
  let count1 = counter(s1);
  let count2 = counter(s2);

  for (let char in count1) {
    if (count1[char] && count2[char]) {
      commonChars += Math.min(count1[char], count2[char]);
    }
  }
  return commonChars;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
