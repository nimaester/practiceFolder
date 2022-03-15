class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
      return true;
    } else {
      return false;
    }
  }

  removeEdge(v1, v2) {
    if (
      this.adjacencyList[v1].includes(v2) &&
      this.adjacencyList[v2].includes(v1)
    ) {
      const v2Idx = this.adjacencyList[v1].indexOf(v2);
      const v1Idx = this.adjacencyList[v2].indexOf(v1);

      this.adjacencyList[v1].splice(v2Idx, 1);
      this.adjacencyList[v2].splice(v1Idx, 1);
      return true;
    } else {
      return false;
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (const edge of [...this.adjacencyList[vertex]]) {
        this.removeEdge(vertex, edge);
      }
      delete this.adjacencyList[vertex];
      return true;
    }
    return false;
  }

  dfsGraphTraversal(vertex) {
    const result = [];
    const visited = {};
    const dfs = (vertex) => {
      if (!vertex) return;
      result.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((v) => (!visited[v] ? dfs(v) : null));
    };
    dfs(vertex);
    return result;
  }

  dfsGraphTraversalIterative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};
    let currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      visited[vertex] = true;
      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfsGraphTraversalIterative("A"));
