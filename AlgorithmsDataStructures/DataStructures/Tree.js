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

class Bst {
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
        if (value < current.val) {
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

  find(value) {
    if (this.root.val === value) {
      return true;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.val) {
        if (currentNode.left === null) {
          return false;
        } else if (currentNode.left.val === value) {
          return true;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          return false;
        } else if (currentNode.right.val === value) {
          return true;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
}

let tree = new Bst();
tree.insert(6);
tree.insert(4);
console.log(tree.find(11));
// console.log(tree);
module.exports = Bst;
