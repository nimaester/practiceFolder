// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let str = strs[0];
  for (let i = str.length; i > 0; i--) {
    let prefix = str.slice(0, i);
    if (strs.every((str) => str.slice(0, i) === prefix)) return prefix;
  }
  return "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
