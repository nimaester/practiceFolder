const areThereDuplicates = (...args) => {
  let freqs = {};
  let duplicates = false;

  for (let ele of args) {
    freqs[ele] ? (duplicates = true) : (freqs[ele] = 1);
  }
  return duplicates;
};

console.log(areThereDuplicates(1, 2, 3, 1));
