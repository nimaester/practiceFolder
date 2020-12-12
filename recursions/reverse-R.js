const reverse = (str) => {
  // add whatever parameters you deem necessary - good luck!
  let reversedString = ""

  while (str.length) {
    reversedString = str[0] + reversedString;
    str = str.slice(1)
  }
  return reversedString;
};

const reverse2 = (str) => {
  let reversedString = "";

  const reverseThatString = (str) => {
    if (!str.length) {
      return reversedString;
    } else {
      reversedString = str[0] + reversedString;
      return reverseThatString(str.slice(1))
    }
  }

  return reverseThatString(str);
}

console.log(reverse2("awesome")); // 'emosewa'
console.log(reverse("alomomola")); // 'loohcsmhtir'
console.log(reverse2("xurkitree"));
