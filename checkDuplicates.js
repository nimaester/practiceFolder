const areThereDuplicates = (...args) => {
  let freqs = {};

  for (let ele of args) {
    if (freqs[ele]) {
      return true;
    } else {
      freqs[ele] = 1;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3));
