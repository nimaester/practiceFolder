// 1678. Goal Parser Interpretation

// You own a Goal Parser that can interpret a string command.
// The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// /**
//  * @param {string} command
//  * @return {string}
//  */

//

var interpret = function (command) {
  let resultString = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(" && command[i + 1] === ")") {
      resultString += "o";
      i += 1;
    } else if (command[i] === "(" && command[i + 1] === "a") {
      resultString += "al";
      i += 3;
    } else {
      resultString += command[i];
    }
  }
  return resultString;
};

const interpret2 = (str) => {
  let result = "";
  let i = 0;
  while (i < str.length) {
    let letter = str[i];
    let nextLetter = str[i + 1];
    if (letter === "(" && nextLetter === ")") {
      result += "o";
      i += 2;
    } else if ((letter = "(" && nextLetter === "a")) {
      result += "al";
      i += 4;
    } else {
      result += str[i];
      i += 1;
    }
  }
  return result;
};

console.log(interpret2("(al)G(al)()()G"));
// console.log(interpret("(al)G(al)()()G"));
console.log(interpret2("G()()()()(al)"));
// console.log(interpret("G()()()()(al)"));
