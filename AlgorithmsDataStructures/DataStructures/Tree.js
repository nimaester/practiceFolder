// trees have a parent child relationship
// Lists are linear, trees are non-linear
// Examples of trees: HTML DOM, Decision tree (AI) or folders in an OS
// binary search trees are sorted, left is less than root/parent right is more than root/parent

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

let tree = new BST();

module.exports = BST;
