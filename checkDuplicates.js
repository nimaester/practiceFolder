const areThereDuplicates = (...args) => {
<<<<<<< HEAD
  let freqs = {};
=======
let freqs = {};
>>>>>>> dc1827d4124c70dc9f6f6f294e3bc6bccc5aff18
  let solution = false;

  for (let ele of args) {
    freqs[ele] ? (solution = true) : (freqs[ele] = 1);
  }
<<<<<<< HEAD
  return solution;
};
=======
  return solution;};
>>>>>>> dc1827d4124c70dc9f6f6f294e3bc6bccc5aff18

console.log(areThereDuplicates(1, 2, 3, 1));
