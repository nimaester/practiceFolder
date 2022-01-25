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
  }

  shift() {
    if (!this.length) return undefined;
    let node = this.head;
    this.head = node.next;
    this.length--;
    if (this.length === 0) this.tail = null;
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
}

const ll = new SinglyLinkedList();
ll.push("1st");
ll.push("2nd");
ll.push("3rd");
ll.pop();
ll.pop();
ll.pop();
ll.pop();
ll.unshift("1st");
ll.unshift("2nd");
ll.unshift("3rd");

// ll.shift();
// ll.shift();
// ll.shift();

console.log(ll.get(2));
console.log(ll.set(0, "FIRST"));
console.log(ll);
