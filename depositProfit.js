// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

// Example

// For deposit = 100, rate = 20, and threshold = 170, the output should be
// depositProfit(deposit, rate, threshold) = 3.

function depositProfit(deposit, rate, threshold) {
  // we are given 3 paramerters,
  // deposit is the amount of money in bank that does not increase
  // rate is an integer of which every year your deposit increases base on rate's %
  // threshold is the number that when reach thats when the condition is met.

  // keep track of years
  // keep track of deposit amount each year
  // return years when threshold is less than deposit]

  // we could make a while loop
  // while deposit is less than the threshold
  // we keep increasing deposit
  // increase our years by 1
  // then we keep the while loop going
  // if condition is met we return years

  let yearsNeeded = 0;
  let percentRate = Number(rate) / 100;

  while (deposit < threshold) {
    deposit = deposit + deposit * percentRate;
    yearsNeeded += 1;
  }

  return yearsNeeded;
}
