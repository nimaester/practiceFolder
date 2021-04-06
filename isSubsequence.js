// Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks wheter the characters int he first string form a subsequence of characters in the second string. In other words, the function should check whether the characthers in the first string appear somewhere in the second string, without their order changing.

// ex. ('hello', 'hello world') true
// ex. ('sing', 'sting') true
// ex. ('abc', 'acb') false

function isSubsequence(query, string) {
  // good luck. Add any arguments you deem necessary.
  for (let i = 0; i < query.length; i++) {
    let letter = query[i];
    if (string.includes(letter)) {
      string = string.slice(string.indexOf(letter));
    } else {
      return false;
    }
  }
  return true;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "acb")); // false
