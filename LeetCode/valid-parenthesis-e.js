// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: s = "{[]}"
// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
/*
 * @param {string} s
 * @return {boolean}
 */

const bracketChecker = () => {};

var isValid = function (s) {
  let splitS = s.split("");
  let bracketsArray = [];

  for (let i = 0; i < splitS.length; i++) {
    let bracket = splitS[i];
    if (bracket === "{" || bracket === "(" || bracket === "[") {
      bracketsArray.push(bracket);
    } else if (
      bracket === "}" &&
      bracketsArray[bracketsArray.length - 1] === "{"
    ) {
      bracketsArray.pop();
    } else if (
      bracket === "]" &&
      bracketsArray[bracketsArray.length - 1] === "["
    ) {
      bracketsArray.pop();
    } else if (
      bracket === ")" &&
      bracketsArray[bracketsArray.length - 1] === "("
    ) {
      bracketsArray.pop();
    } else {
      bracketsArray.push(bracket);
    }
  }
  return bracketsArray.length === 0;
};
