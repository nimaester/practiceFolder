x = { foo: "bar" };
y = { baz: x };
z = y["baz"]["foo"];

let store = { a: 1 };
let dispatch = { b: 2 };

let c = { ...store, dispatch };
var fun = function () {
  return {
    log: function () {
      console.log(this.val);
    },
  };
};

var fat = function () {
  return {
    log: () => {
      console.log(this.val);
    },
  };
};

console.log(fat().log());
console.log(fun());
