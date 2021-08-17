const LinkedList = require("./AlgorithmsDataStructures/DataStructures/LinkedList");

let ll = new LinkedList();
ll.addToHead(5);
ll.addToHead(4);
ll.addToHead(3);
ll.addToHead(2);
ll.addToHead(1);
ll.addToHead(3);
console.log(ll);

// Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

// Example

// For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
// removeKFromList(l, k) = [1, 2, 4, 5];
// For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
// removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
// Input/Output

const listToArray = (l) => {
  let array = [];
  while (l) {
    array.push(l.value);
    l = l.next;
  }
  return array;
};

const removeKFromList = (l, k) => {
  while (l !== null && l.value === k) {
    l = l.next;
  }

  let current = l;

  while (current !== null && current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return l;
};

let k = removeKFromList(ll.head, 3);
console.log(listToArray(k));
