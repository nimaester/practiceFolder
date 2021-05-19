// trees have a parent child relationship
// Lists are linear, trees are non-linear
// Examples of trees: HTML DOM, Decision tree (AI) or folders in an OS
// binary search trees are sorted, left is less than root/parent right is more than root/parent
// BST are best and average case O(log n) insertion and searching

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
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.val) {
        currentNode = currentNode.left;
      } else if (value > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs() {
    //breadth first search
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      } else if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

module.exports = Bst;
