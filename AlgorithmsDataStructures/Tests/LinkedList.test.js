const LinkedList = require("../DataStructures/LinkedList.js");

describe("#addToHead", () => {
  test("it adds an element to beginning of List", () => {
    const ll = new LinkedList();
    ll.addToHead(100);
    ll.addToHead(200);

    expect(ll.head.value).toBe(200);
    expect(ll.head.next.value).toBe(100);
  });
});

describe("#size", () => {
  test("returns the length of the Linked List", () => {
    const ll = new LinkedList();
    ll.addToHead(100);
    ll.addToHead(200);

    expect(ll.size()).toBe(2);
  });
});

describe("#checkValue", () => {
  test("checks if a value is present in the Linked List", () => {
    const ll = new LinkedList();
    ll.addToHead(100);
    ll.addToHead(200);
    ll.addToHead(300);

    expect(ll.checkValue(100)).toBe(true);
    expect(ll.checkValue(300)).toBe(true);
    expect(ll.checkValue(999)).toBe(false);
  });
});

describe("#removeHead", () => {
  test("return the value of the removed head", () => {
    const ll = new LinkedList();
    ll.addToHead(100);
    ll.addToHead(200);

    expect(ll.removeHead()).toBe(200);
    expect(ll.removeHead()).toBe(100);
    expect(ll.removeHead()).toBe(null);
  });
});

describe("#getAtIndex", () => {
  test("return the value in a given index", () => {
    const ll = LinkedList.createLinkedList("three", "two", "one", "zero");

    expect(ll.getAtIndex(0).value).toBe("three");
    expect(ll.getAtIndex(3).value).toBe("zero");
    expect(ll.getAtIndex(1).value).toBe("two");
  });

  describe("with an index greater than Linked List length", () => {
    test("returns null", () => {
      const ll = LinkedList.createLinkedList("three", "two", "one", "zero");
      expect(ll.getAtIndex(15)).toBeNull();
      expect(ll.getAtIndex(10)).toBeNull();
    });
  });

  describe("with an index less than zero", () => {
    test("returns null", () => {
      const ll = LinkedList.createLinkedList("three", "two", "one", "zero");
      expect(ll.getAtIndex(-1)).toBeNull();
      expect(ll.getAtIndex(-22)).toBeNull();
    });
  });
});

describe("#print", () => {
  test("list the values in the Linked List", () => {
    const ll = new LinkedList();
    ll.addToHead(3);
    ll.addToHead(2);
    ll.addToHead(1);

    expect(ll.print()).toBe(console.log("1 > 2 > 3 > null"));
  });
});

describe("#insertAtIndex", () => {
  test("returns a new Linked List with a value inserted at index", () => {
    const ll = LinkedList.createLinkedList("three", "two", "one", "zero");
    ll.insertAtIndex(1, "insertedValue");
    expect(ll.getAtIndex(1).value).toBe("insertedValue");
  });

  describe("insert at 0 index", () => {
    test("returns a new Linked List with a value inserted at index 0", () => {
      const ll = LinkedList.createLinkedList("three", "two", "one", "zero");
      ll.insertAtIndex(0, "insertedValue");
      expect(ll.getAtIndex(0).value).toBe("insertedValue");
    });
  });

  describe("insert at index higher than the length of the Linked List", () => {
    test("returns null", () => {
      const ll = LinkedList.createLinkedList("three", "two", "one", "zero");
      ll.insertAtIndex(15, "insertedValue");
      expect(ll.getAtIndex(15)).toBeNull();
    });
  });

  describe("insert at index lower than 0", () => {
    test("returns null", () => {
      const ll = LinkedList.createLinkedList("three", "two", "one", "zero");
      ll.insertAtIndex(-11, "insertedValue");
      expect(ll.getAtIndex(-11)).toBeNull();
    });
  });
});

describe("#removeAtIndex", () => {
  test("removes from a given index", () => {
    const ll = LinkedList.createLinkedList(1, 2, 3, 4);
    ll.removeAtIndex(1);
    ll.removeAtIndex(1);
    expect(ll.print()).toBe(console.log("1 > 4 > null"));
  });

  describe("remove at an index higher than the Linked List length", () => {
    test("returns null", () => {
      const ll = LinkedList.createLinkedList(1, 2, 3, 4);
      expect(ll.removeAtIndex(15)).toBeNull();
    });
  });
});

describe("#addToTail", () => {
  test("adds value to the end of the LinkedList", () => {
    const ll = LinkedList.createLinkedList(1, 4);
    ll.addToTail(15);
    expect(ll.print()).toBe(console.log("1 > 4 > 15 > null"));
  });

  describe("if a Linked List is empty, add to the beginning of List", () => {
    test("adds value to the end of the LinkedList", () => {
      const ll = new LinkedList();
      ll.addToTail(15);
      expect(ll.print()).toBe(console.log("15 > null"));
    });
  });
});

describe("#reverse", () => {
  test("reverses a Linked List's order", () => {
    const ll = LinkedList.createLinkedList(1, 2, 3, 4);
    ll.reverse();
    expect(ll.print()).toBe(console.log("4 > 3 > 2 > 1 > null"));
  });
});
