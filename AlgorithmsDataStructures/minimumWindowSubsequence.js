// Given strings str1 and str2, find the minimum (contiguous) substring
// subStr of str1, such that every character of str2 appears in subStr in
// the same order as it is present in str2.

// If there is no window in str1 that covers all characters in str2, return an empty string.
// If there are multiple minimum-length windows, return the one with the leftmost starting index.

const minWindow = (str1, str2) => {
  let idx1 = 0;
  let idx2 = 0;
  let currentShortest = "";
  let shortest = "";

  while (idx1 < str1.length) {
    if (str1[idx1] === str2[idx2]) {
      currentShortest += str1[idx1];
      idx1++;
      idx2++;
    }

    if (idx2 > str2.length - 1) {
      // end of st2
      idx2 = 0;
      if (currentShortest.length < shortest.length && shortest.length > 0) {
        shortest = currentShortest;
      } else if (shortest.length === 0) {
        shortest = currentShortest;
      }
      currentShortest = "";
    }

    if (str1[idx1] !== str2[idx2]) {
      if (currentShortest.length > 0) {
        currentShortest += str1[idx1];
      }
      idx1++;
    }
  }

  return shortest;
};

// "abcdebdde" , "bde"
// "fgrqsqsnodwmxzkzxwqegkndaa" , "kzed"
// "michmznaitnjdnjkdsnmichmznait" , "michmznait"
// "afgegrwgwga" , "aa"
// "abababa" , "ba"

console.log(minWindow("abcdebdde", "bde"));
