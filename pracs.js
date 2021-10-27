const d = new Date().getDay();
const s = new Date().getFullYear();

const getRand = (min, max) => {
  // inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandNon = (min, max) => {
  // exclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

const counter = (arr) => {
  let counts = {};
  arr.forEach((num) => (counts[num] ? counts[num]++ : (counts[num] = 1)));
  return counts;
};

const frequencyCounter = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const arr1Count = counter(arr1);
  const arr2Count = counter(arr2);

  for (const key in arr1Count) {
    if (!arr2Count[key ** 2]) return false;
    if (arr2Count[key ** 2] !== arr1Count[key]) return false;
  }
  return true;
};

console.log(frequencyCounter([1, 2, 3, 4, 5], [4, 9, 25, 1, 16]));
