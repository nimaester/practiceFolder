// nestedEvenSum

// write a recursive function called nestedEvenSum. Return the sum of all even number in an abject which may contain nested objects

function nestedEvenSum(object) {
  // add whatever parameters you deem necessary - good luck!

  let sum = 0;
  const countSum = (object) => {
    let keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      if (typeof object[keys] === "number" && object[keys] % 2 === 0) {
        sum += object[keys];
        if (i !== keys.length - 1) {
          i++;
        } else {
          return;
        }
      }
      countSum(object[keys]);
    }
  };

  countSum(object);
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
