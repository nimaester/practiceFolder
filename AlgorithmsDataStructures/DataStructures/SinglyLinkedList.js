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

  rotate(num) {
    if (num > this.length) num = num % this.length;
    if (num < 0) num = this.length + num;
    if (!num) return;
    let counter = 0;

    let node = this.head;
    while (counter !== num) {
      this.head = node.next;
      node.next = null;
      this.tail = node;
      node = this.head;
      counter++;
    }

    return this;
  }
  reverse() {
    if (this.length === 0) return;
    let prev;
    let current = this.head;
    let next;
    this.tail = current;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail.next = null;
    this.head = prev;
    return this;
  }
}

const ll = new SinglyLinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
console.log(ll.reverse());
