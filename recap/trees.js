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

  dfsPreorder() {
    const result = [];
    if (!this.root) return result;
    const checkNodes = (node) => {
      result.push(node.value);
      if (node.left) checkNodes(node.left);
      if (node.right) checkNodes(node.right);
    };

    checkNodes(this.root);
    return result;
  }

  dfsPostOrder() {
    const result = [];
    if (!this.root) return result;
    const checkNodes = (node) => {
      if (node.left) checkNodes(node.left);
      if (node.right) checkNodes(node.right);
      result.push(node.value);
    };
    checkNodes(this.root);
    return result;
  }

  dfsInOrder() {
    const result = [];
    if (!this.root) return result;
    const checkNodes = (node) => {
      if (node.left) checkNodes(node.left);
      result.push(node.value);
      if (node.right) checkNodes(node.right);
    };
    checkNodes(this.root);
    return result;
  }

  dfsInOrderReverse() {
    const result = [];
    if (!this.root) return result;
    const checkNodes = (node) => {
      if (node.right) checkNodes(node.right);
      result.push(node.value);
      if (node.left) checkNodes(node.left);
    };
    checkNodes(this.root);
    return result;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

console.log(bst.dfsInOrderReverse());
