// const runningSum = (arr) => {
//   let x = 1;
//   let sum = x;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     console.log(`1:   sum:${sum} x:${x} i:${i}`);
//     if (sum < 1) {
//       while (sum < 1) {
//         x++;
//         sum++;
//       }
//     } else {
//       sum += arr[i];
//     }
//     console.log(`sum:${sum} x:${x} i:${i}`);
//   }
//   return x;
// };

const runningSum = (arr) => {
  let x = 0;
  for (let i = x; x < Infinity; x++) {
    let sum = x;

    for (let num of arr) {
      sum += num;
      console.log(`sum:${sum} x:${x}`);
      if (sum < 1) {
        break;
      }
    }
    if (sum >= 1) {
      return x;
    }
  }
  return 0;
};
console.log(runningSum([-5, 4, -2, 3, 1, -1, -6, -1, 0, -5]));
