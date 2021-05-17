//FIRST IN FIRST OUT
// BIG O of queues, Insertion o(1), removal o(1), searching o(n), access o(n)
// useful for processing tasks
// Insertion and removal has to be o(1)

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // adding to end of the queue
  enqueue(value) {
    let node = new Node(value);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  // removing from beginning of the queue
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    let oldFirst = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = oldFirst.next;
      oldFirst.next = null;
    }
    this.length--;
    return oldFirst;
  }
}

module.exports = Queue;
