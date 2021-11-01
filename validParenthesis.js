const validParenthesis = (str) => {
  if (str.length === 0) return true;

  const stack = [];

  const parens = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let p of str) {
    if (p === "(" || p === "{" || p === "[") {
      stack.push(p);
    } else if (parens[p] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(validParenthesis("()")); //=>true
console.log(validParenthesis("(]")); //=>false
console.log(validParenthesis("([)]")); //=>false
console.log(validParenthesis("()[]{}")); //=>true
console.log(validParenthesis("{[]}")); //=>true
