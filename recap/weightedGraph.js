const PriorityQueue = require("./priorityQueue");

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push({ val: v2, weight });
      this.adjacencyList[v2].push({ val: v1, weight });
    }
  }
}

// const wg = new WeightedGraph();
// wg.addVertex("A");
// wg.addVertex("B");
// wg.addVertex("C");
// wg.addEdge("A", "B", 5);
// wg.addEdge("A", "C", 3);
// wg.addEdge("B", "C", 1);
// console.log(wg.adjacencyList);

let p = new PriorityQueue();
console.log(p);
