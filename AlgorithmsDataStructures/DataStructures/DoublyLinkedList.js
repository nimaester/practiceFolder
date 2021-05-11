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
    let node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    let oldTail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }

    let oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  getAtIndex(index) {
    if (this.length === 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.head;
    } else if (index === this.length - 1) {
      return this.tail;
    }

    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = this.head.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = this.tail.prev;
        count--;
      }
      return current;
    }
  }

  set(value, index) {
    if (index < 0 || index > this.length - 1) {
      return false;
    }
    let valueToChange = this.getAtIndex(index);
    valueToChange.val = value;
    return true;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      let prevIndex = this.getAtIndex(index - 1);
      let nextIndex = this.getAtIndex(index);
      let insertedNode = new Node(value, nextIndex, prevIndex);
      prevIndex.next = insertedNode;
    }
    this.length++;
    return true;
  }

  show() {
    let nums = "";
    for (let i = 0; i < this.length; i++) {
      nums += this.getAtIndex(i).val;
    }
    return nums;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return false;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let currentIndex = this.getAtIndex(index);
      let nextIndex = currentIndex.next;
      let prevIndex = this.getAtIndex(index - 1);
      prevIndex.next = nextIndex;
      nextIndex.prev = prevIndex;

      currentIndex.next = null;
      currentIndex.prev = null;
    }
    this.length--;
    return true;
  }
}

module.exports = DoublyLinkedList;
