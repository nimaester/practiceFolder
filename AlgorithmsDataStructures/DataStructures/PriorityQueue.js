// compare the priorities instead of values
//.

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  siftDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  // same as a heap but instead of comparing val, compares priorities
  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    // incase idx = -1
    if (parentIdx <= 0) {
      parentIdx = 0;
    }

    while (this.values[idx].priority < this.values[parentIdx].priority) {
      let parentVal = this.values[parentIdx];
      let idxVal = this.values[idx];
      this.values[idx] = parentVal;
      this.values[parentIdx] = idxVal;
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
      if (parentIdx <= 0) {
        parentIdx = 0;
      }
    }
    return this;
  }

  dequeue() {
    if (this.values.length === 0) {
      return undefined;
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }
    let oldMax = this.values[0];
    this.values[0] = this.values.pop();
    this.siftDown();
    return oldMax;
  }
}

let pq = new PriorityQueue();
pq.enqueue("forty", 4);
pq.enqueue("forty", 3);
pq.enqueue("sixty", 6);
pq.enqueue("forty", 10);
pq.enqueue("forty", 2);
pq.dequeue();
console.log(pq);
module.exports = PriorityQueue;
