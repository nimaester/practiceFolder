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
