const flatten = (array) => {
  let result = [];

  const checkIfArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      let ele = array[i];
      if (Array.isArray(ele)) {
        checkIfArray(ele);
      } else {
        result.push(ele);
      }
    }
  };
  checkIfArray(array);
  return result;
};

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
console.log(flatten([1, 2, 3, [4, 5]]));
