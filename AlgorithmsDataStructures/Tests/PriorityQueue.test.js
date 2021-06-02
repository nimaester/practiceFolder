const PriorityQueue = require("../DataStructures/PriorityQueue");

describe("#enqueue", () => {
  test("adds a node to an empty queue", () => {
    let pq = new PriorityQueue();
    pq.enqueue("five", 5);
    expect(pq.values[0].value).toBe("five");
  });

  describe("adding a node with a higher priority than current highest priority", () => {
    test("returns the inserted node", () => {
      let pq = new PriorityQueue();
      pq.enqueue("five", 5);
      pq.enqueue("four", 4);
      expect(pq.values[0].value).toBe("four");
    });
  });
});

describe("#dequeue", () => {
  test("return undefined for an empty queue", () => {
    let pq = new PriorityQueue();
    expect(pq.dequeue()).toBe(undefined);
  });

  describe("adding and removing from the queue", () => {
    test("returns the value of the added and removed node", () => {
      let pq = new PriorityQueue();
      pq.enqueue("one", 1);
      expect(pq.dequeue().value).toBe("one");
    });
  });

  describe("returns the highest priority (less is more priority) when removing from heap", () => {
    test("returns the value of the removed node", () => {
      let pq = new PriorityQueue();
      pq.enqueue("seven", 7);
      pq.enqueue("eight", 8);
      pq.enqueue("four", 4);
      pq.enqueue("three", 3);
      pq.dequeue();
      pq.enqueue("one", 1);
      pq.enqueue("two", 2);
      pq.dequeue();
      pq.enqueue("six", 6);
      expect(pq.dequeue().value).toBe("two");
    });
  });
});
