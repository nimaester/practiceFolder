// max binary heaps are children are smaller than parent
// min is parent is smaller than children
// heaps ares stored as array, first child of an element in a heap is 2n + 1, 2nd child is 2n + 2

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  compareValues(idx) {
    const child = idx;
    const parent = Math.ceil(child / 2) - 1;

    if (parent === -1) return;
    if (this.values[child] > this.values[parent]) {
      [this.values[child], this.values[parent]] = [
        this.values[parent],
        this.values[child],
      ];
      this.compareValues(parent);
    }
  }

  insert(val) {
    this.values.push(val);
    this.compareValues(this.values.length - 1);
    return this;
  }

  fixHeap() {
    let parent = 0;
    while (true) {
      let one = parent * 2 + 1;
      let two = parent * 2 + 2;

      let max = Math.max(this.values[one], this.values[two]);
      if (this.values[one] === undefined) break;
      if (two >= this.values.length) max = this.values[one];
      let maxIdx = this.values.indexOf(max);

      if (max > this.values[parent]) {
        let temp = this.values[parent];
        this.values[parent] = this.values[maxIdx];
        this.values[maxIdx] = temp;
        parent = maxIdx;
      } else {
        break;
      }
    }
  }

  extractMax() {
    if (!this.values.length) return undefined;
    if (this.values.length === 1) return this.values.pop();
    const max = this.values.shift();
    this.values.unshift(this.values.pop());
    this.fixHeap();
    return max;
  }
}

let h = new MaxBinaryHeap();
h.insert(55);
console.log(h.showValues());
