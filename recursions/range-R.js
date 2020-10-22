const recursiveRange = (min, max) => {
  let total = 0;
  const sumRange = (min, max) => {
    if (max === min) {
      total += max;
      return total;
    }
    total += max;
    return sumRange(min, max - 1);
  };
  return sumRange(min, max);
};


function recursiveRange(x){
  if (x === 0 ) return 0;
  return x + recursiveRange(x-1);
}
