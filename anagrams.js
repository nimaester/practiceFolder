const charCounter = (str) => {
  let charCount = {};
  for (let char of str) {
    charCount[char] ? charCount[char]++ : (charCount[char] = 1);
  }
  return charCount;
};

// console.log(charCounter("hello"));

const anagrams = (str1, str2) => {
  let charCount1 = charCounter(str1);
  let charCount2 = charCounter(str2);

  if (str1.length !== str2.length) {
    return false;
  }

  for (let key in charCount1) {
    if (charCount1[key] !== charCount2[key]) {
      return false;
    }
  }
  return true;
};

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqs = {};

  for (let letter of str1) {
    freqs[letter] ? (freqs[letter] += 1) : (freqs[letter] = 1);
  }

  for (let letter of str2) {
    if (!freqs[letter] || freqs[letter] === 0) {
      console.log(freqs);
      return false;
    } else {
      freqs[letter] -= 1;
    }
  }

  return true;
};

console.log(validAnagram("anna", "mana"));

// console.log(anagrams("hello", "helol"));
