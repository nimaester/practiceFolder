// Heaps are another category of trees
// max binary heap is parents value is larger than children and not in order
// min binary heap is parents value is smaller than children and not in order
// binary heap is compact since there are no particular order for children nodes, just higher or lower than parent
// left children or nodes are filled out first
// for any index of an array left child is stored at 2*n + 1, right child is at 2*n + 2
// for any child node at index n, its parent is at index Math.floor(n - 1) / 2

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (this.values[idx] > this.values[parentIdx]) {
      let parentVal = this.values[parentIdx];
      let idxVal = this.values[idx];
      this.values[idx] = parentVal;
      this.values[parentIdx] = idxVal;
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this;
  }

  // fix this tommorow
  removeMax() {
    if (this.values.length === 0) {
      return undefined
    }
    if (this.values.length === 1) {
      return this;
    }


    let newMax = this.values.pop();
    while(this.values[0] < )

    return this
  }
}

module.exports = MaxBinaryHeap;
