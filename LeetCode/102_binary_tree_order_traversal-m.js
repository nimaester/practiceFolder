// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

const Bst = require("../AlgorithmsDataStructures/DataStructures/Tree");

const levelOrder = (root) => {
  if (!root) return [];

  const queue = [root];
  const levels = [];

  while (queue.length) {
    const qLength = queue.length;
    const level = [];
    for (let i = 0; i < qLength; i++) {
      let currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      level.push(currentNode.val);
    }
    levels.push(level);
  }
  return levels;
};

let tree = new Bst();
tree.insert(3);
tree.insert(9);
tree.insert(20);
tree.insert(15);
tree.insert(7);

console.log(tree);

console.log(levelOrder(tree.root));
