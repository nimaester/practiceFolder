// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

const sumOddLengthSubarrays = (arr) => {
  const odds = [];
  let oddsTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      odds.push(arr[j]);
      if (odds.length % 2 !== 0) {
        for (let val of odds) {
          oddsTotal += val;
        }
      }
    }
    odds.length = 0;
  }
  return oddsTotal;
};

// let ex = [1, 4, 2, 5, 3];
// console.log(sumOddLengthSubarrays(ex));
