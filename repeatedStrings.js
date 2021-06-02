// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example

// s = 'abcac'
// n = 10

// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

// input is a string that is to be repeated by n
//  n will be the length of the repeated string
// output integer repesenting number of a's
// cons s will be at least 1 and less than 100, n will be 1 or less than 10**6
// edge c, will there be capital letters? integers or just lowercase letters
// take the string and count its length and a values
// take the n and modulo the string length and n

// abcac = L5, A2
// if n % l === 0 a * (n/l)
// total = a * (n/l)
// n % l = remainder
// make a loop to check the number of a's and stop at remainder;
// if letter is = total ++
// return total

const repeatedString = (s, n) => {
  let total = 0;
  let numberOfA = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      numberOfA++;
    }
  }

  if (n % s.length === 0) {
    total += numberOfA * Math.floor(n / s.length);
  } else {
    let remainder = n % s.length;
    total += numberOfA * Math.floor(n / s.length);
    for (let j = 0; j < remainder; j++) {
      if (s[j] === "a") {
        total++;
      }
    }
  }
  return total;
};

console.log(
  repeatedString(
    "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq",
    549382313570
  )
);
