const Stack = require("../DataStructures/Stacks.js");

describe("#push", () => {
  test("if the list is empty set first and last to the new node", () => {
    const ss = new Stack();
    ss.push(2);
    expect(ss.length).toBe(1);
    expect(ss.first.val).toBe(2);
    expect(ss.last.val).toBe(2);
  });

  describe("pushes node to the top of the stack", () => {
    test("if the stack is not empty set a new first with the new node", () => {
      const ss = new Stack();
      ss.push(2);
      ss.push(1);
      expect(ss.length).toBe(2);
      expect(ss.first.val).toBe(1);
      expect(ss.last.val).toBe(2);
    });
  });
});

describe("#pop", () => {
  test("returns the value that was removed", () => {
    const ss = new Stack();
    ss.push(2);
    ss.push(1);
    expect(ss.pop().val).toBe(1);
  });

  describe("checks if the Stack is empty", () => {
    test("returns undefined when stack is empty", () => {
      const ss = new Stack();
      expect(ss.pop()).toBe(undefined);
    });
  });

  describe("removing from a Stack with one node", () => {
    test("sets start and end to null when used", () => {
      const ss = new Stack();
      ss.push(1);
      ss.pop();
      expect(ss.first).toBeNull();
      expect(ss.last).toBeNull();
    });
  });
});
