class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let checkVals = (current, node) => {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        } else {
          return checkVals(current.left, node);
        }
      } else if (node.value > current.value) {
        if (!current.right) {
          current.right = node;
          return;
        } else {
          return checkVals(current.right, node);
        }
      }
    };

    checkVals(this.root, node);
  }

  find(val) {
    if (!this.root) return false;

    let current = this.root;
    while (true) {
      if (current.value !== val && !current.left && !current.right) {
        return false;
      } else if (current.value === val) {
        return true;
      } else if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      }
    }
  }

  display() {
    const node = this.root;
    const data = [];
    const queue = [node];

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  order() {
    const result = [];
    const checkBranch = (node) => {
      if (node.left) {
        checkBranch(node.left);
      }
      result.push(node.value);

      if (node.right) {
        checkBranch(node.right);
      }
    };
    checkBranch(this.root);
    return result;
  }

  bfs() {
    const result = [];
    if (!this.root) return result;
    const nodesToCheck = [this.root];
    while (nodesToCheck.length) {
      let node = nodesToCheck.shift();
      result.push(node.value);
      if (node.left) nodesToCheck.push(node.left);
      if (node.right) nodesToCheck.push(node.right);
    }
    return result;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(9);
bst.insert(23);
bst.insert(24);
bst.insert(27);
bst.insert(35);
console.log(bst.bfs());
