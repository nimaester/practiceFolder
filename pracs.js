const CamelCase = (str) => {
  // code goes here
  let strCopy = str.split("");
  let letters = /^[a-zA-Z]+$/;
  for (let i = 0; i < strCopy.length; i++) {
    let char = strCopy[i];
    if (char.match(letters)) {
      continue;
    } else {
      strCopy[i] = " ";
    }
  }
  let splitStr = strCopy.join("").split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    let char = splitStr[i];
    if (i === 0) {
      splitStr[i] = char.toLowerCase();
    } else {
      splitStr[i] = char[0].toUpperCase() + char.slice(1).toLowerCase();
    }
  }
  return splitStr.join("");
};

// keep this function call here

console.log(CamelCase("cats AND*Dogs-are Awesome"));
