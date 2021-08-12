// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct

/*
-make a count variable to correspond the number of stones that are also jewels
-split the string jewel in seperate letters
-split the stones in separate letters
-compare each stones with each of the jewels you have
-if found increment count
-return count
*/

const numJewelsInStones = (j, s) => {
  let count = 0;
  let jewels = j.split("");
  let stones = s.split("");

  for (let i = 0; i < stones.length; i++) {
    let stone = stones[i];
    if (jewels.includes(stone)) {
      count++;
    }
  }
  return count;
};

// var numJewelsInStones = function(J, S) {
//   const set = new Set();
//   for(const s of J) {
//     set.add(s);
//   }
//   let ans = 0;
//   for(const s of S) {
//     if(set.has(s)){
//       ans++;
//     }
//   }
//   return ans;
// };

// console.log(numJewelsInStones("aA", "aAAbbbb"))
// console.log(numJewelsInStones("z", "ZZ"))

let fn = (num) => {
  console.log(num);
};

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    fn(i);
  }, 0);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    fn(i);
  }, 0);
}
