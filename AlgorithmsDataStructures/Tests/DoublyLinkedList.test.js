const DoublyLinkedList = require("../DataStructures/DoublyLinkedList.js");

describe("#push", () => {
  test("if the list is empty set tail and head to the new node", () => {
    const dll = new DoublyLinkedList();
    dll.push(1);
    expect(dll.head.val).toBe(1);
    expect(dll.tail.val).toBe(1);
  });

  describe("if a List is not empty, add new node to the end of the List", () => {
    test("adds node to the end of the List", () => {
      const dll = new DoublyLinkedList();
      dll.push(2);
      dll.push(1);
      expect(dll.head.val).toBe(2);
      expect(dll.tail.val).toBe(1);
      expect(dll.tail.prev.val).toBe(2);
      expect(dll.head.next.val).toBe(1);
    });
  });
});

describe("#pop", () => {
  test("removes the last node in the List", () => {
    const dll = new DoublyLinkedList();
    dll.push(2);
    dll.push(1);
    dll.pop();
    expect(dll.length).toBe(1);
    expect(dll.head.val).toBe(2);
    expect(dll.tail.val).toBe(2);
  });

  describe("If a List is empty return null", () => {
    test("returns null if a List is empty", () => {
      const dll = new DoublyLinkedList();
      dll.push(1);
      dll.pop();
      expect(dll.pop()).toBeNull();
    });
  });
});

describe("#shift", () => {
  test("removes node from beginning of the List", () => {
    const dll = new DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    expect(dll.shift().val).toBe(1);
    expect(dll.length).toBe(1);
  });

  describe("If a List is empty return null", () => {
    test("returns null if a List is empty", () => {
      const dll = new DoublyLinkedList();
      dll.push(1);
      dll.shift();
      expect(dll.shift()).toBeNull();
    });
  });
});

describe("#unshift", () => {
  test("if the list is empty set tail and head to the new node", () => {
    const dll = new DoublyLinkedList();
    dll.unshift(1);
    expect(dll.head.val).toBe(1);
    expect(dll.tail.val).toBe(1);
  });

  describe("if a List is not empty, add new node to the start of the List", () => {
    test("adds node to the beginning of the List", () => {
      const dll = new DoublyLinkedList();
      dll.unshift(2);
      dll.unshift(1);
      expect(dll.head.val).toBe(1);
      expect(dll.tail.val).toBe(2);
      expect(dll.tail.prev.val).toBe(1);
      expect(dll.head.next.val).toBe(2);
    });
  });
});
