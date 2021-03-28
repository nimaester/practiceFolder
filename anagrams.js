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

// console.log(anagrams("hello", "helol"));
