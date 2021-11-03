const Bst = require("./AlgorithmsDataStructures/DataStructures/Tree.js");

const maximumDepth = (root) => {
  if (!root) return 0;
  const left = maximumDepth(root.left);
  const right = maximumDepth(root.right);
  return Math.max(left, right) + 1;
};

let tree = new Bst();
tree.insert(6);
tree.insert(7);
tree.insert(4);
tree.insert(2);
tree.insert(55);
tree.insert(23);
tree.insert(41);
tree.insert(0);

console.log(maximumDepth(tree.root));
