class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  size() {
    return this.length;
  }

  print() {
    let result = "";
    let current = this.head;
    while (current !== null) {
      result = `${result}${current.value} > `;
      current = current.next;
    }
    console.log(`${result}null`);
  }

  checkValue(value) {
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  removeHead() {
    if (this.head === null) {
      return null;
    }
    let newHead = this.head.next;
    let oldHead = this.head.value;
    this.head = newHead;
    this.length--;
    return oldHead;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let prev = this.getAtIndex(index - 1);
    let after = this.getAtIndex(index + 1);
    prev.next = after;
    this.length--;
  }

  insertAtIndex(index, value) {
    if (index === 0) {
      this.addToHead(value);
    }

    // node {val 0, next: {node {val1, next {node {val2, next, null}}}}} // 1
    let prev = this.getAtIndex(index - 1);
    if (prev === null) {
      return null;
    }

    prev.next = new Node(value, prev.next);
    this.length++;
  }

  addToTail(value) {
    if (this.head === null) {
      this.addToHead(value);
    }
    let tail = this.getAtIndex(this.length - 1);
    tail.next = new Node(value);
  }

  reverse() {
    let node = this.head;
    let tail = this.getAtIndex(this.length - 1);
    this.head = tail;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// creates a linked list for testing purpose
LinkedList.createLinkedList = (...values) => {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.addToHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
