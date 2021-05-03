class Node {
  constructor(value, next) {
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
    return current.value;
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

  // insertAtIndex(index, value) {
  //   if (index === 0) {
  //     this.addToHead(value);
  //   }

  //   let prev = this.getAtIndex(index - 1);

  //   let node = new Node();
  // }
}

module.exports = LinkedList;
