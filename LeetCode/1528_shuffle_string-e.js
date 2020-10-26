// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

// Example 2:
// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// Example 3:
// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"

// Example 4:
// Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
// Output: "arigatou"

// Example 5:
// Input: s = "art", indices = [1,0,2]
// Output: "rat"
// First Attempt
const restoreString = (string, indices) => {

  let paired = [];
  for (let i = 0; i < string.length; i ++) {
    paired.push([string[i], indices[i]])
  }

  paired.sort((a, b) => (a[1] - b[1]))
  let result = "";
  for (let i = 0; i < paired.length; i ++) {
    result += paired[i][0];
  }

  return result;
}
// second Attempt
const restoreString = (string, indices) => {

  let result = string.split("");
  for (let i = 0; i < string.length; i ++) {
    result.splice(indices[i], 1, string[i])
  }

  return result.join("");
}

// Optimal solution
const restoreString = (string, indices) => {
  let result = [];
  indices.forEach((index, i) => (result[index] = string[i]))
  return result.join("")
}

console.log(restoreString("aiohn", [3,1,4,2,0]))