let counter = new Map();
let string = "hello world and the other worlds";

for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  let count = counter.has(letter) ? counter.get(letter) : 0;
  counter.set(letter, count + 1);
}

console.log(counter);
console.log(counter.set("w", 55));
console.log(counter.keys());
console.log(counter.values());
console.log(counter.entries());
