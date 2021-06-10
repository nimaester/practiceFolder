// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

//  /**
//  * @param {string} s
//  * @return {string}
//  */

var replaceDigits = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (i % 2 === 0) {
      result += letter;
    } else {
      let nextLetter = s[i - 1].charCodeAt(0); // gets the charCode of the previous element
      nextLetter += Number(s[i]); // adds the number of skips to the next letter
      result += String.fromCharCode(nextLetter);
    }
  }
  return result;
};

console.log(replaceDigits("a1b2c3z9e"));
