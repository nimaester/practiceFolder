// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node
// from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

const LinkedList = require("../AlgorithmsDataStructures/DataStructures/LinkedList");

const swapNodes = (h, k) => {
  let current = h;
  let left = h;
  let right = h;

  for (let i = 1; i < k; i++) {
    current = current.next;
  }

  left = current;

  while (current.next !== null) {
    current = current.next;
    right = right.next;
  }
  [right.value, left.value] = [left.value, right.value];

  let result = [];
  let pos = h;

  while (pos !== null) {
    result.push(pos.value);
    pos = pos.next;
  }
  return result;
};

const swapNodes2 = (h, k) => {
  let llArray = [];
  let current = h;
  while (current) {
    llArray.push(current.value);
    current = current.next;
  }

  let left = k - 1;
  let right = llArray.length - k;
  [llArray[left], llArray[right]] = [llArray[right], llArray[left]];

  const ll = new LinkedList();

  for (let i = llArray.length - 1; i >= 0; i--) {
    let num = llArray[i];
    ll.addToHead(num);
  }

  // return ll;

  let result = [];
  let pos = ll.head;

  while (pos !== null) {
    result.push(pos.value);
    pos = pos.next;
  }
  return result;
};

const ll = LinkedList.createLinkedList(1, 2, 3, 4, 5); //[ 1, 4, 3, 2, 5 ]
const ll3 = LinkedList.createLinkedList(1, 2, 3, 4, 5); //[ 1, 4, 3, 2, 5 ]
const ll2 = LinkedList.createLinkedList(7, 9, 6, 6, 7, 8, 3, 0, 9, 5); // [7,9,6,6,8,7,3,0,9,5]
console.log(swapNodes(ll2.head, 5));
console.log(swapNodes(ll.head, 2));
console.log(swapNodes2(ll3.head, 2));
