// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

const charCounter = (str) => {
  let charCount = {};
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
};

const maximumNumberOfBalloons = (str) => {
  let numberOfBalloons = 0;
  let charCount = charCounter(str);
  while (
    charCount["a"] > 0 &&
    charCount["b"] > 0 &&
    charCount["l"] > 1 &&
    charCount["o"] > 1 &&
    charCount["n"] > 0
  ) {
    numberOfBalloons++;
    charCount["a"]--;
    charCount["b"]--;
    charCount["l"] -= 2;
    charCount["o"] -= 2;
    charCount["n"]--;
  }
  return numberOfBalloons;
};

console.log(maximumNumberOfBalloons("balloonsballons"));
