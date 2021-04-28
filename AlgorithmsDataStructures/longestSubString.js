const findLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; //t h i s i s
    if (seen[char]) {
      start = Math.max(start, seen[char]); // (0, 3) start = 3 , (3, 4) start = 4
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1); // (0, 1) longest = 1
    // (1, 2) longest = 2,  (2, 3) longest = 3, (3, 4) longest = 4,
    // (4, 3) longest = 4,  (4, 5)

    // store the index of the next char so as to not double count
    seen[char] = i + 1; // {t: 1, h: 2, i: 5 s: 4,}
  }
  return longest;
};

console.log(findLongestSubstring("thisisawesome"));
