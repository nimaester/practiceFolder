// var lengthOfLongestSubstring = function (s) {
//   //keeps track of chars we have seen
//   const chars = new Set();
//   let [start, end] = [0, 0];
//   let maxLength = 0;
//   while (end < s.length) {
//     let char = s[end];
//     // if set doesnt have char, add char to set
//     if (!chars.has(char)) {
//       chars.add(char);
//       // compare which is bigger, the number of chars in the set or our current maxL
//       maxLength = Math.max(chars.size, maxLength);
//       // increment end to check next char
//       end++;
//     } else {
//       // we keep deleting chars in the set on the left of the string till theres no more duplicate
//       // EX
//       // s = 'abcdbea'
//       // set = {a, b, c, d, b*}
//       // since we have b already we delete chars in our set till we have unique chars in our set
//       // increment our start pos to move our window to the right
//       // set = {b, c, d, b* } => set ={c, d, b}
//       // once all chars are unique we keep going
//       // set = {c, d, b, e} => set = {c, d, b, e, a}
//       chars.delete(s[start]);
//       start++;
//     }
//   }
//   return maxLength;
// };

const longestSub = (str) => {
  const seen = new Set();
  let [start, end] = [0, 0];
  let maxL = 0;

  while (end < str.length) {
    if (!seen.has(str[end])) {
      seen.add(str[end]);
      maxL = Math.max(seen.size, maxL);
      end++;
    } else {
      seen.delete(str[start]);
      start++;
    }
  }
  return maxL;
};
console.log(longestSub("ssssskassss"));
