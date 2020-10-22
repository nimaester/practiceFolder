const naiveSearch = (string, term) => {
  let ocurrences = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < term.length; j++) {
      if (string[i + j] !== term[j]) {
        break;
      } else if (j === term.length - 1) {
        ocurrences++;
      }
    }
  }
  return ocurrences;
};

console.log(naiveSearch("lololololololoss", "lo"));
