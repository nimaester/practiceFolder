const allAnagrams = (str) => {
  const anagrams = [];
  const getAnagrams = (str, result) => {
    if (str.length === 0) {
      anagrams.push(result);
    }
    for (let i = 0; i < str.length; i++) {
      let remain = str.substring(0, i) + str.substring(i + 1);
      getAnagrams(remain, result + str[i]);
    }
  };
  getAnagrams(str, "");
  return anagrams;
};

console.log(allAnagrams("abc"));
