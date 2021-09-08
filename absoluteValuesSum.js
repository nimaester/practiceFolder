// Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// (where abs denotes the absolute value)

// If there are several possible answers, output the smallest one.

function absoluteValuesSumMinimization(a) {
  let lowest = null;
  let lowestValue = null;

  for (let i = 0; i < a.length; i++) {
    let currentNum = a[i];
    let total = 0;

    a.map((num) => {
      total += Math.abs(num - currentNum);
    });

    if (lowest === null) {
      lowest = total;
      lowestValue = currentNum;
    } else if (total < lowest) {
      lowest = total;
      lowestValue = currentNum;
    }
  }
  return lowestValue;
}
