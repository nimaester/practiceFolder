// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

// Constraints:
// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.


var countConsistentStrings = function(allowed, words) {
  let count = 0;
  let allowedChars = allowed.split("");
  for (let i =0; i < words.length; i ++) {
      let word = words[i];
      for (let j = 0; j < word.length; j ++) {
          let char = word[j];
          if (allowedChars.indexOf(char) === -1) {
              break
          } else if (j === word.length - 1) {
              count += 1
          }
      }
  }
  return count
};

const countConsistentStrings = (allowed, words) => {
  let validWords = words.length;
  let allowedChars = allowed.split("");
  words.forEach(word => {
    for (let i = 0; i < word.length; i ++) {
      let letter = word[i];
      if (allowedChars.indexOf(letter) === - 1) {
        validWords -= 1;
        break;
      }
    }
  })
  return validWords;
}

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"] )) // 2


