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

  // removeValue(value) {
  //   while (this.head.next !== null) {
  //     if (this.head.value === value) {
  //       return;
  //     } else {
  //       let newHead = this.head.next;
  //       this.head = newHead;
  //       this.length--;
  //     }
  //   }
  //   return "nothing found";
  // }

  displayValues() {
    let result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(this.head.value);
      let newHead = this.head.next;
      this.head = newHead;
    }
    return result;
  }
}

LinkedList.addToList = (...values) => {
  let ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.addToHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
