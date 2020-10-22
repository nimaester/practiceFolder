const reverse = (string) => {
  // add whatever parameters you deem necessary - good luck!
  let result = "";

  const recursiveReverse = (string) => {
    if (!string.length) {
      return result;
    }
    result = string[0] + result;
    return recursiveReverse(string.slice(1));
  };
  return recursiveReverse(string);
};

// console.log(reverse("awesome")); // 'emosewa'
// console.log(reverse("rithmschool")); // 'loohcsmhtir'
