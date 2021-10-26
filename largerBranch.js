/* Given a binary tree represented as an array, for example, [3,6,2,9,-1,10] represents a binary tree and -1 is a non existent node.
Write a function that determines whether the left or right branch of the ree is larger.
The size of each branch s the sum of the node values.
The function should return the string "Right" if the right size is larger and "Left" if the left size is larger.
If the tree has 0 nodes of it the size of the branches are equal, return the empty string.

Sample cases:

[3,6,2,9,-1,10] return "Left".
[1,10,5,1,0,6] return ""
Explanation: Size of both branches are equal

*/

const getLargerBranch = (arr) => {
  if (!arr || arr.length === 0) return "";
  let leftSum = 0;
  let rightSum = 0;

  const leftParentIdx = 1;
  const rightParentIdx = 2;

  leftSum = addBranchValues(arr, leftParentIdx);
  rightSum = addBranchValues(arr, rightParentIdx);

  return leftSum > rightSum ? "Left" : leftSum < rightSum ? "Right" : "Equal";
};

const addBranchValues = (arr, idx) => {
  if (arr[idx] === -1 || idx > arr.length) return 0;
  const leftChild = idx * 2 + 1;
  const rightChild = idx * 2 + 2;
  let sum = 0;
  if (idx < arr.length) {
    sum =
      arr[idx] +
      addBranchValues(arr, leftChild) +
      addBranchValues(arr, rightChild);
  }
  return sum;
};

console.log(getLargerBranch([3, 6, 2, 9, -1, 10]));
console.log(getLargerBranch([1, 10, 5, 1, 0, 6]));

const arr = [];
arr[0] = "hi";
console.log(arr);
