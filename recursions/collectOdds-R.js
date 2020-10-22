const collectOdds = (array) => {
  let result = [];

  const colOdds = (array) => {
    if (array.length === 0) {
      return result;
    }

    if (array[array.length - 1] % 2 !== 0) {
      result.unshift(array[array.length - 1]);
    }
    array.pop();
    return colOdds(array);
  };

  return colOdds(array);
};

// console.log(collectOdds([1, 2, 3, 4, 5, 6, 7]));

const collectOdds2 = (array) => {
  let result = [];

  if (array.length === 0) {
    return result;
  }

  if (array[0] % 2 !== 0) {
    result.push(array[0]);
  }

  result = result.concat(collectOdds2(array.slice(1)));
  return result;
};

console.log(collectOdds2([1, 2, 3, 4, 5, 6, 7]));
