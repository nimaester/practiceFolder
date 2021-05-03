class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
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
    for (let i = 0; i < value; i++) {
      current = current.next;
    }
    return current.value;
  }

  size() {
    return this.length;
  }

  checkValue(value) {
    let current = this.head;
    for (let i = 0; i < value; i++) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
}

LinkedList.addToList = (...values) => {
  let ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.addToHead(values[i]);
  }
  return ll;
};

const ll = LinkedList.addToList(1, 2, 3, 4, 5);
console.log(ll);
console.log(ll.size());
console.log(ll.checkValue(4));
