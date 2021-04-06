// 1672. Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// /**
// * @param {number[][]} accounts
// * @return {number}
// */

var sumOfWealth = (account) => {
  return account.reduce((a, b) => {
    return a + b;
  }, 0);
};

var maximumWealth = function (accounts) {
  let richest = 0;

  accounts.forEach((account) => {
    if (sumOfWealth(account) >= richest) {
      richest = sumOfWealth(account);
    }
  });
  return richest;
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
    [1, 2, 3, 4, 5, 6],
  ])
);

let accounts1 = [
  [1, 5],
  [7, 3],
  [3, 5],
];
console.log(maximumWealth(accounts1));
// Output: 10

let accounts2 = [
  [1, 2, 3],
  [3, 2, 1],
];
console.log(maximumWealth(accounts2));
// Output: 6

let accounts3 = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
console.log(maximumWealth(accounts3));
// Output: 17
