// given 2 strings write a function to determine if the second
// string is an anagram of the first,
// "" === "" true, "anagram" === "margaan" true, "ana" === "anna" false

const countLetters = (str) => {
  const letterCount = {};
  str
    .split("")
    .forEach((char) =>
      letterCount[char] ? letterCount[char]++ : (letterCount[char] = 1)
    );
  return letterCount;
};

const validAnagram = (str1, str2) => {
  // anagram is you can build the first word by using the letters on the second word
  // str1 letter count has to be the same as the second one for it to be a valid anagram
  // we could create a helper function that counts the number of chars in the word for each str

  //  ** what if the second string has extra letters?
  //  we can check first if str1 length is same as str2 length
  if (str1.length !== str2.length) return false;
  if (str1.length === 0 && str2.length === 0) return true;

  // use that function on both str so it can have the counter of each letter in the str
  const str1Count = countLetters(str1);
  const str2Count = countLetters(str2);

  // we will have 2 objects that represents number of chars
  // we can iterate that object and check if the letter exists on the str2 obj
  for (let key in str1Count) {
    if (str1Count[key] !== str2Count[key]) {
      return false;
    } else if (!str2Count.hasOwnProperty(key)) {
      return false;
    }
  }
  //  if it does we also need to check if the occurence is the same
  //  if its not we return false
  //  if we check all the key value pairs on the str1 obj that means all the letter count are same, return true
  console.log(str1Count, str2Count);
  return true;
};

// time complexity is 0(n) where is n is the length of the str
// we need to use 3 loops in this solution

// instead of making 2 objects, just make one and subtract the value if the letter exists in second str
const validAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const count = {};
  str1
    .split("")
    .forEach((char) => (count[char] ? count[char]++ : (count[char] = 1)));
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!count[char]) {
      return false;
    } else {
      count[char]--;
    }
  }

  return true;
};
console.log(validAnagram2("aaaba", "aaaab"));
