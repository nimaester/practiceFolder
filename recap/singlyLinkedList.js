class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;
    let currentNode = this.head;
    let currentTail = currentNode;
    while (currentNode.next) {
      currentTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = currentTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) (this.head = null), (this.tail = null);
    return currentNode;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.length) return undefined;
    let node = this.head;
    this.head = node.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return node;
  }

  get(idx) {
    if (idx > this.length - 1 || idx < 0) return null;
    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(idx, val) {
    let node = this.get(idx);
    return node ? ((node.val = val), true) : false;
  }

  insert(idx, val) {
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else if (!this.get(idx - 1) || idx < 0) {
      return false;
    } else {
      let prevNode = this.get(idx - 1);
      let node = new Node(val, prevNode.next);
      prevNode.next = node;
      this.length++;
      return this;
    }
  }

  remove(idx) {
    if (idx > this.length - 1 || idx < 0) {
      return false;
    } else if (idx === this.length - 1) {
      return this.pop();
    } else if (idx === 0) {
      return this.shift();
    } else {
      let prevNode = this.get(idx - 1);
      let nodeToRemove = this.get(idx);
      prevNode.next = nodeToRemove.next;
      this.length--;
      return nodeToRemove;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = current;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  display() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr, ` ==> LENGTH: ${this.length}`);
  }
}

// const ll = new SinglyLinkedList();
// ll.push(1);
// ll.push(2);
// ll.push(3);
// console.log(ll.reverse());
