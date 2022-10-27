// Given a string s that represents a DNA sequence, and a number k,
// return all the contiguous sequences (substrings) of length k that
// occur more than once in the string. The order of the returned
// subsequences does not matter. If no repeated subsequence is found,
// the function should return an empty array.

// The DNA sequence is composed of a series of nucleotides abbreviated
// as A,C,G, and T. For example, ACGAATTCCG  is a DNA sequence. When
// studying DNA, it is useful to identify repeated sequences in it.

// Example 1
// CC'ATAT'GTATGG'ATAT', k=4
// Ans: [ATAT]

// Example 2
// 'AAAACCCC'T'AAAACCCC', k=8
// Ans: [AAAACCCC]

// loop the string
// slice the string from a cetrain point with k length
// have that value saved
// have container that saves the values that are repeated
// return that container when fininsh looping

const findRepeatedSequences = (s, k) => {
  const results = new Map();
  const checkedStr = new Map();

  for (let i = 0; i < s.length; i++) {
    let currentStr = s.slice(i, i + k);
    if (checkedStr.has(currentStr) && !results.has(currentStr)) {
      results.set(currentStr);
    } else {
      checkedStr.set(currentStr);
    }
  }
  return [...results.keys()];
};
