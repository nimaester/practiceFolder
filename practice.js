var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");
  return s[s.length - 1].length;
};

// console.log(lengthOfLastWord("   fly me   to   the moon  "));
const del = (items) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].length === 0) {
      items.splice(i, 1);
    }
  }
  return items;
};

const f = (n) => (n <= 1 ? 1 : n * f(n - 1));
let g = f(4);

function fun(a) {
  return (a += 1);
}

function funs(func, items) {
  let i = 0;
  for (let item of items) {
    if (func(item)) {
      items[i] = item;
      i += 1;
    }
  }
  items.splice(i);
  return items;
}

const check = (array) => {
  let pos = false;
  let neg = false;

  array.forEach((num) => {
    pos = num > 0;
    neg = num < 0;
  });
  return [pos, neg];
};

const rep = (s) => {
  let sp = s.split(",").map((str) => str.replace(/[^\w]/gi, ""));
  return sp;
};

let sen = " - type, this, in, there,";
console.log(rep(sen));
