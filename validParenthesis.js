const validParenthesis = (str) => {
  let result = [];
  let openers = ["[", "{", "("];
  let closers = ["]", "}", ")"];

  for (let char of str) {
    if (openers.includes(char)) {
      result.push(char);
    } else if (closers.includes(char)) {
      let lastIndex = result.length - 1;
      if (openers.indexOf(result[lastIndex]) === closers.indexOf(char)) {
        result.pop();
      } else {
        return false;
      }
    }
  }

  return result.length === 0;
};

console.log(validParenthesis("()")); //=>true
console.log(validParenthesis("(]")); //=>false
console.log(validParenthesis("([)]")); //=>false
console.log(validParenthesis("()[]{}")); //=>true
console.log(validParenthesis("{[]}")); //=>true
