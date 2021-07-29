const areThereDuplicates = (...args) => {
  let freqs = {};
  let solution = false;

  for (let ele of args) {
    freqs[ele] ? (solution = true) : (freqs[ele] = 1);
  }
  return solution;
};

console.log(areThereDuplicates(1, 2, 3, 1));
