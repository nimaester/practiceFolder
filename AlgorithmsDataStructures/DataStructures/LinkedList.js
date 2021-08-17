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

  addToHead(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      node.next = oldHead;
    }
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

  checkValue(val) {
    let position = this.head;
    while (position) {
      if (position.value === val) {
        return true;
      } else {
        position = position.next;
      }
    }
    return false;
  }

  removeHead() {
    if (this.head === null) {
      return null;
    } else {
      let removedHead = this.head;
      this.head = removedHead.next;
      this.length--;
      return removedHead.value;
    }
  }

  removeAtIndex(index) {
    if (index + 1 > this.length) {
      return null;
    }

    let position = this.head;
    let len = 0;
    while (position) {
      if (len === this.length - 1) {
        return this.head.value;
      } else {
        position = position.next;
        len++;
        this.length--;
      }
    }
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

  reverse() {
    
  }
}

// creates a linked list for testing purpose
LinkedList.createLinkedList = (...values) => {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.addToHead(values[i]);
    ll.length++;
  }
  return ll;
};

module.exports = LinkedList;
