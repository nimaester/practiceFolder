// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:
// Input: "III"
// Output: 3

// Example 2:
// Input: "IV"
// Output: 4

// Example 3:
// Input: "IX"
// Output: 9

// Example 4:
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 5:
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/*
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let values = [];
  let total = 0;

  const romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  for (let value of s) {
    values.push(romanNumbers[value]);
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] < values[i + 1]) {
      total -= values[i];
    } else {
      total += values[i];
    }
  }

  return total;
};
//
// [1000,100,1000,10,100,1,5]
// create a values array to store each individual string values
// create a total variable to keep track of our current total
// create object that has the value of each letter in the string
// we refer to that object and we put each value of a letter to our values array
// we itertate through our values array
// if our current number is less than the number following it we subtract its value from the total
// if its not then we just add the value to our total
// return total

console.log(romanToInt("X"));
console.log(romanToInt("MCMXCIV"));
