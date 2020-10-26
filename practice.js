const same = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.forEach((num) => {
    let squared = arr2.indexOf(num ** 2);
    if (squared === - 1) {
      return false;
    }
    arr2.splice(squared, 1)
  })
  return true;
}

// first array has values, second array is arr1 values squared
// check if its eqaul

console.log(same([1,2,3,3], [4,1,4,9]))