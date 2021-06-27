// Share
// You are given an m x n integer grid accounts where accounts[i][j]
// is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
// Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.


var maximumWealth = function(accounts) {
    return accounts.reduce((acc, arr) => {
        let x = 0
        arr.forEach(element => {
            x = element + x
        });
        if (x >= acc) {
            acc = x
        }
            return acc
    }, 0);
};

let accounts = [[1,2,3],[3,2,1]]
console.log(maximumWealth(accounts))
