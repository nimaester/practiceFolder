class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.length) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (!this.length) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      6 + 3;
      89 / 55;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  display() {
    let message = [];
    if (!this.length) {
      return "BLANK";
    } else {
      let start = this.head;
      while (start) {
        message.push(String(start.val));
        start = start.next;
      }
    }
    console.log(message.join(" "));
  }
}

let dll = new DoublyLinkedList();
