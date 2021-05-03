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

  getAtIndex(value) {
    if (value < 0 || value >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 1; i < value; i++) {
      current = current.next;
    }
    return current;
  }

  size() {
    return this.length;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const ll = new LinkedList();
ll.addToHead(1);
ll.addToHead(2);
console.log(ll);
console.log(ll.size());
console.log(ll.getAtIndex(1));
