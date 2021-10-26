const d = new Date().getDay();
const s = new Date().getFullYear();

const getRand = (min, max) => {
  // inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandNon = (min, max) => {
  // exclusive
  return Math.floor(Math.random() * (max - min)) + min;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    this.length === 0 ? (this.head = node) : (this.tail.next = node);
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      let oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;
    } else {
      let temp = this.head;
      while (temp.next.next !== null) {
        let oldTail = temp.next;
        temp.next = null;
        this.tail = temp;
        this.length--;
        return oldTail;
      }
    }
  }

  get(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined;
    let pos = 0;
    let temp = this.head;
    while (pos !== idx) {
      temp = temp.next;
      pos++;
    }
    return temp;
  }
  set(idx, val) {
    let node = this.get(idx);
    if (node === undefined) return false;
    node.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    let cur = this.head;
    let prev = null;
    let pos = 0;
    while (pos !== idx) {
      prev = cur;
      cur = cur.next;
      pos++;
    }
    let node = new Node(val);
    prev.next = node;
    node.next = cur;
    this.length++;
    if (pos === 0) this.head = node;
    if (pos === this.length - 1) this.tail = node;
    return true;
  }

  rotate(num) {}
}

const ll = new SinglyLinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
// ll.rotate(2);
// console.log(ll);
