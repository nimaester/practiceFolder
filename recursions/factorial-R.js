const factorial = (min, max) => {
  let total = 1;

  const factorialR = (min, max) => {
    if (max === min) {
      total *= max;
      return total;
    }
    total *= max;
    return factorialR(min, max - 1);
  };

  return factorialR(min, max);
};

// console.log(factorial(1, 5));

const factorial2 = (num) => {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial2(num - 1);
};

// console.log(factorial2(5));
