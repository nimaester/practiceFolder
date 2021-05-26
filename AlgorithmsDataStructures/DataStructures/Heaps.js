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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

  removeMax() {
    if (this.values.length === 0) {
      return null;
    }
    let oldMax = this.values[0];
    this.values[0] = this.values.pop();
    this.siftDown();
    return oldMax;
  }
}

let mbh = new MaxBinaryHeap();
mbh.insert(5);
mbh.insert(35);
mbh.insert(17);
mbh.insert(85);
mbh.insert(12);
mbh.insert(8);
mbh.removeMax();
console.log(mbh.values);
module.exports = MaxBinaryHeap;
