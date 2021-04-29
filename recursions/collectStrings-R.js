const collectStrings = (obj) => {
  let strings = [];
  let checkIfString = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        strings.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        return checkIfString(obj[key]);
      }
    }
  };
  checkIfString(obj);
  return strings;
};

let obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
console.log(collectStrings(obj));
