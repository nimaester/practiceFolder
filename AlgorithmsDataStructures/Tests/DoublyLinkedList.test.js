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

describe("#getAtIndex", () => {
  test("returns the node at the indicated index", () => {
    const dll = new DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.unshift(0);
    expect(dll.getAtIndex(4).val).toBe(4);
    expect(dll.getAtIndex(0).val).toBe(0);
    expect(dll.getAtIndex(1).val).toBe(1);
    expect(dll.getAtIndex(3).val).toBe(3);
  });
  describe("empty list or index not found", () => {
    test("returns undefined if a List is Empty or Index is higher than List length", () => {
      const dll = new DoublyLinkedList();
      dll.push(1);
      dll.pop();
      let value = dll.getAtIndex(2);
      expect(value).toBe(undefined);
    });
  });
});

describe("#set", () => {
  test("returns false if index is less than 0 or higher than length of List - 1", () => {
    const dll = new DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    dll.push(3);
    expect(dll.set("four", 15)).toBe(false);
    expect(dll.set("four", -22)).toBe(false);
  });

  describe("#changes the value of a node in a specific index", () => {
    test("returns false if index is less than 0 or higher than length of List - 1", () => {
      const dll = new DoublyLinkedList();
      dll.push(1);
      dll.push(2);
      dll.push(3);
      dll.push(3);
      expect(dll.set(0, 0)).toBe(true);
      expect(dll.getAtIndex(0).val).toBe(0);
    });
  });
});

describe("#insert", () => {
  test("inserts at beginning or end of the list", () => {
    const dll = new DoublyLinkedList();
    dll.push("zero");
    dll.insert("another zero", 0);
    dll.insert("one", 2);
    expect(dll.getAtIndex(0).val).toBe("another zero");
    expect(dll.getAtIndex(2).val).toBe("one");
    expect(dll.insert("not a valid index", -121)).toBe(false);
  });

  describe("inserts at a index a given value", () => {
    test("returns true if function is succesful", () => {
      const dll = new DoublyLinkedList();
      dll.push("zero");
      dll.insert("another zero", 0);
      dll.insert("one", 1);
      expect(dll.getAtIndex(1).val).toBe("one");
    });
  });
});

describe("#remove", () => {
  test("removes a certain node in a given index", () => {
    const dll = new DoublyLinkedList();
    dll.push("zero");
    dll.insert("another zero", 0);
    dll.insert("one", 2);
    dll.remove(1);
    expect(dll.getAtIndex(1).val).toBe("one");
  });

  describe("empty list or index is higher than lists length", () => {
    test("returns false when index is less than zero or higher than lists length", () => {
      const dll = new DoublyLinkedList();
      dll.push("zero");
      dll.insert("another zero", 0);
      dll.insert("one", 2);
      expect(dll.remove(-1)).toBe(false);
      expect(dll.remove(123)).toBe(false);
    });
  });

  describe("if the index is at zero or at the end of the list", () => {
    test("returns true and removesthe values in the specified index", () => {
      const dll = new DoublyLinkedList();
      dll.push(0);
      dll.push(1);
      dll.remove(0);
      dll.unshift(0);
      dll.remove(1);
      expect(dll.getAtIndex(0).val).toBe(0);
    });
  });
});

describe("#show", () => {
  test("returns the values of nodes as a string", () => {
    const dll = new DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    expect(dll.show()).toBe("123");
  });
});
