class Node {
  constructor(val, p) {
    this.val = val;
    this.priority = p;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  comparePriorities(idx) {
    const child = idx;
    const parent = Math.ceil(child / 2) - 1;

    if (parent === -1) return;
    if (this.values[child].priority < this.values[parent].priority) {
      [this.values[child], this.values[parent]] = [
        this.values[parent],
        this.values[child],
      ];
      this.comparePriorities(parent);
    }
  }

  enqueue(val, p) {
    const node = new Node(val, p);
    this.values.push(node);
    if (this.values.length === 1) return;
    this.comparePriorities(this.values.length - 1);
    return this;
  }

  fixQueue() {
    let parent = 0;
    while (true) {
      let one = parent * 2 + 1;
      let two = parent * 2 + 2;

      let min;
      if (this.values[one] === undefined) {
        break;
      } else if (two >= this.values.length) {
        min = this.values[one];
      } else if (this.values[one].priority < this.values[two].priority) {
        min = this.values[one];
      } else {
        min = this.values[two];
      }
      let minIdx = this.values.indexOf(min);

      if (min.priority < this.values[parent].priority) {
        let temp = this.values[parent];
        this.values[parent] = this.values[minIdx];
        this.values[minIdx] = temp;
        parent = minIdx;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (!this.values.length) return undefined;
    if (this.values.length === 1) return this.values.pop();
    const min = this.values.shift();
    this.values.unshift(this.values.pop());
    this.fixQueue();
    return min;
  }
}

let p = new PriorityQueue();
