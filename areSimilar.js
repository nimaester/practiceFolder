// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

function areSimilar(a, b) {
  let ele1m = null;
  let ele2m = null;
  let n = 0;

  for (let i = 0; i < a.length; i++) {
    let ele1 = a[i];
    let ele2 = b[i];
    if (ele1 !== ele2) {
      n++;

      if (n > 2) {
        return false;
      }

      if (ele1m === null) {
        ele1m = ele1;
        ele2m = ele2;
      } else {
        if (ele1m !== ele2 || ele2m !== ele1) {
          return false;
        }
      }
    }
  }
  return true;
}
