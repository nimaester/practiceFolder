// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"

const reverseStringOnly = (str) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );

  let start = 0;
  let end = str.length - 1;
  str = str.split("");

  while (end >= start) {
    if (!letters.includes(str[start])) {
      start++;
    } else if (!letters.includes(str[end])) {
      end--;
    } else {
      let temp1 = str[start];
      let temp2 = str[end];
      str[start] = temp2;
      str[end] = temp1;
      start++;
      end--;
    }
  }

  return str.join("");
};
