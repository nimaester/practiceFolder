// There is two integer arrays a and b and a target value.
// Determine if there is a pair of numbers, where one is from array
// a and the other from array b, that can be added together to get the
// sum of the target value. if a pair exists return true, else false.

let it = 1000;

const sumOfTwo = (arr1, arr2, target) => {
  for (let i = 0; i < arr1.length; i++) {
    let num1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      let num2 = arr2[j];
      if (num1 + num2 === target) {
        console.log(num1, num2);
        return true;
      }
    }
  }
  return false;
};

const sumOfTwo2 = (arr1, arr2, target) => {
  let valuesNeeded = new Map();
  for (let num1 of arr1) {
    let need = target - num1;
    valuesNeeded.set(need);
  }
  for (let num2 of arr2) {
    if (valuesNeeded.has(num2)) {
      return true;
    }
  }
  return false;
};

console.time("Function #1");
for (let i = 0; i < it; i++) {
  sumOfTwo([1, 2, 3, 4, 5, 6, 7], [5, 4, 6, 7, 2, 1], 12);
}
console.timeEnd("Function #1");

console.time("Function #2");
for (let i = 0; i < it; i++) {
  sumOfTwo2([1, 2, 3, 4, 5, 6, 7], [5, 4, 6, 7, 2, 1], 12);
}
console.timeEnd("Function #2");
