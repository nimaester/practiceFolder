class Node {
  constructor(val, priority) {
    this.val = val;
    this.prior = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue() {}

  dequeue() {}
}

module.exports = PriorityQueue;
