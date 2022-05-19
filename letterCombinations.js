// Given a string containing digits from 2-9 inclusive, return all possible
// letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given
// below. Note that 1 does not map to any letters.

const numData = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const letterCombinations = (digits) => {
  let len = digits.length;
  let ans = [];
  if (!len) return [];
  const dfs = (pos, str) => {
    if (pos === len) {
      ans.push(str);
    } else {
      let letters = numData[digits[pos]];
      for (let i = 0; i < letters.length; i++) {
        dfs(pos + 1, str + letters[i]);
      }
    }
  };
  dfs(0, "");
  return ans;
};

console.log(letterCombinations("223"));
