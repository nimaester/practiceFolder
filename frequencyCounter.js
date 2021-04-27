const countFreq = (ele) => {
  const freq = {};
  for (let char of String(ele)) {
    freq[char] ? freq[char]++ : (freq[char] = 1);
  }
  return freq;
};

console.log(countFreq(132456));

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  if (String(num1).length !== String(num2).length) {
    return false;
  }

  let freq1 = countFreq(num1);
  let freq2 = countFreq(num2);

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}



console.log(sameFrequency(182, 812));
console.log(sameFrequency(18222, 82212));
console.log(sameFrequency(11182, 812));
console.log(sameFrequency(18821, 88121));
console.log(sameFrequency(1834432, 8134332));
