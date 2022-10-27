const findRepeatedSequences = (s, k) => {
  // Your code will replace this placeholder return statement.

  const calculate = (str) => {
    let val = 1;
    str.split("").forEach((char, i) => {
      if (char === "A") {
        val += 13;
      } else if (char === "T") {
        val ** 3;
      } else if (char === "G") {
        val -= 2;
      } else {
        val -= 11;
      }
    });
    return val;
  };
  const values = new Map();
  let result = [];
  for (let i = 0; i + k < s.length; i++) {
    let segment = s.slice(i, i + k - 1);
    if (values.has(calculate(segment))) {
      result.push(segment);
    } else {
      values.set(calculate(segment), i);
    }
  }
  return result;
};

console.log(findRepeatedSequences("AAAAACCCCCAAAAACCCCCC", 8));
