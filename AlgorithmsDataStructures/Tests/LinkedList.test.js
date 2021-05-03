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
    const ll = LinkedList.addToList("zero", "one", "two", "three");

    expect(ll.getAtIndex(0)).toBe("zero");
    expect(ll.getAtIndex(3)).toBe("three");
    expect(ll.getAtIndex(1)).toBe("one");
    expect(ll.getAtIndex(-3)).toBe(null);
    expect(ll.getAtIndex(15)).toBe(null);
  });
});
