class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// LAST IN FIRST OUT
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      node.next = temp;
      this.first = node;
      this.last = temp;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      let newFirst = temp.next;
      this.start = newFirst;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

module.exports = Stack;
