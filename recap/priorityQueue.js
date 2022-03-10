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

  dequeue() {}
}

let p = new PriorityQueue();
p.enqueue("five", 5);
p.enqueue("four", 4);

p.enqueue("one", 1);
p.enqueue("one", 0);
p.enqueue("one", -1);
console.log(p.values);
