/* 
Write a function that accepts a string and returns an object with the number of 
occurence of each letter

- funciton takes in a string
- what if the argument is missing or not a string ?
- does it accept all kinds of string IE ?_+(#) NO
- how to handle capital letters HeLlo ? NO

- returns an object with key is letter value is occurnce
- "hello" 
- include all the letters in the alpha IE {a: 0, b: 0 ...} NO
- {h: 1, e:1} YES

- check if string is valid? no arguments ? return null
- check each letter in the string by using a loop 

- we neeed a place to store their occurence and the char use an obj
  - start with an empty object
  - check if that char is seen, if it is increment the value
  - if char is not seen create a new entry set value to 1

- once loop finishes return object
*/

const charCount = (str) => {
  if (str.length === 0) return null;

  const counts = {};
  str.split("").forEach((char) => {
    let asciiCode = char.charCodeAt(0);
    if (asciiCode >= 97 && asciiCode <= 122) {
      if (counts.hasOwnProperty(char)) {
        counts[char]++;
      } else {
        counts[char] = 1;
      }
    }
  });
  return counts;
};
