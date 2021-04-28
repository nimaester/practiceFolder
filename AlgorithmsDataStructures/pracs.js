// input = string
// output = number of length of the longest substring
// constraits =
// edge cases = are caps and lower case considered same char? what if our string length == 0 ? null or 0

// iterate the string and count the occurence of each letter

// object with letter and their occurence as we go along the loop

// make vars longest and currentLongest

// check each char in string, we put letter in the lettercounter

// we check the lettercounter if any of the letters are more than 1

// if it is then we reset our currentlongest to 0;

// if its not in the letter counter, we increment our currentLongest and update our letter counter;

// check if currentLongest > longest, so if is then we update longest to current longest

// return longest

const longestSubstring = (string) => {
  // strings
  let longest = 0;
  let seenChars = [];
  let currentLongest = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (seenChars.includes(char)) {
      currentLongest = 1;
      seenChars = [char];
    } else {
      seenChars.push(char);
      currentLongest++;
      if (currentLongest > longest) {
        longest = currentLongest;
      }
    }
  }

  return longest;
};

console.log(longestSubstring("thisisawesome"));
