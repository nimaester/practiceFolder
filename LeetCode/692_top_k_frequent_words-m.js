// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the
// same frequency by their lexicographical order.

// Example 1:
// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.'

// Example 2:
// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of
// occurrence being 4, 3, 2 and 1 respectively.

// count the occurence of each word
// we sort the object
// we can use Object.keys so we can use the built in sort function
// if a key and another key is equal in occurence,
//    we can compare the strings in alphabetical order by using localeCompare
//    that will return a 1 or -1 and we can sort using that
// if first key value is less than second key value we put the seconde key before first key
// return the number of words by slicing our sorted words by k

var topKFrequent = function (words, k) {
  let counts = {};
  for (const word of words) {
    counts.hasOwnProperty(word) ? counts[word]++ : (counts[word] = 1);
  }
  const sorted = Object.keys(counts).sort((a, b) =>
    counts[a] === counts[b] ? a.localeCompare(b) : counts[b] - counts[a]
  );
  return sorted.slice(0, k);
};

const exp = [
  "the",
  "day",
  "is",
  "sunny",
  "the",
  "the",
  "the",
  "sunny",
  "is",
  "is",
];

console.log(topKFrequent(exp, 4));
