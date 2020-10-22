let obj = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
};

const countDown = (num) => {
  let result = "";
  const recursive = (num) => {
    if (num === 0) {
      result += "All Done";
      return result;
    }

    result += `${obj[num]} ... \n`;
    return recursive(num - 1);
  };
  return recursive(num);
};

// console.log(countDown(9));
