// 860. Lemonade Change
// At a lemonade stand, each lemonade costs $5.

// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

// Return true if and only if you can provide every customer with correct change.

// @param {number[]} bills
// @return {boolean}

const lemonadeChange = (bills) => {
  let change = { 5: 0, 10: 0 };

  for (let bill of bills) {
    if (bill === 5) {
      change[bill]++;
    } else if (bill === 10) {
      change[bill]++;
      if (change[5] === 0) {
        return false;
      } else {
        change[5]--;
      }
    } else if (bill === 20) {
      if (change[10] >= 1 && change[5] >= 1) {
        change[10]--;
        change[5]--;
      } else if (change[5] >= 3) {
        change[5] -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
