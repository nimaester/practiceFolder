const Queue = require("../DataStructures/Queues");

describe("#enqueue", () => {
  test("adds node to the beggining of the queue", () => {
    const q = new Queue();
    q.enqueue("first");
    q.enqueue("second");
    expect(q.length).toBe(2);
  });

  describe("adds new node to the queue when its empty", () => {
    test("queue's last and first will be the new node", () => {
      const q = new Queue();
      q.enqueue("first");
      expect(q.first.val).toBe("first");
      expect(q.last.val).toBe("first");
      expect(q.length).toBe(1);
    });
  });
});

describe("#dequeue", () => {
  test("first and last will be null when queue has one node", () => {
    const q = new Queue();
    q.enqueue("first");
    q.dequeue();
    expect(q.length).toBe(0);
    expect(q.first).toBeNull();
    expect(q.last).toBeNull();
  });

  describe("removing from an empty queue", () => {
    test("returns undefined when removing from a queue that is empty", () => {
      const q = new Queue();
      expect(q.dequeue()).toBe(undefined);
    });
  });

  describe("adds new nodes to the last of the queue and removes from beginning of queue", () => {
    test("sets a new start or new last when node is removed", () => {
      const q = new Queue();
      q.enqueue("first");
      q.enqueue("second");
      q.enqueue("third");
      expect(q.dequeue().val).toBe("first");
      expect(q.length).toBe(2);
    });
  });
});
