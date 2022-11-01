const LinkedList = require("../AlgorithmsDataStructures/DataStructures/LinkedList");

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  var List = new Node(0); // create a new Node to make a LinkedList
  var head = List; //
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.value; // sum = 2, sum = 4, sum = 4 (sum = 1 + l1.val = 3)
      l1 = l1.next; // l1 = 4>3, l1 = 3>x, l1> x
    }
    if (l2 !== null) {
      sum = sum + l2.value; // sum = 7 // sum = 10 // sum = 8
      l2 = l2.next; // l2 = 6>4, l2 = 4 > x, l2> x
    }
    if (sum >= 10) {
      // false, true, false
      carry = 1; // carry = 1
      sum = sum - 10; // sum = 0
    }
    let newNode = new Node(sum); // {val: 7, next: null},  {val: 0, next: null}, {val: 8, next: null}
    head.next = newNode; // {val: 0, next: {val: 7, next: null}}, {val: 0 next: HEAD{val: 7, next: {val: 0, next: null}}}
    head = head.next; // head = {val: 7, next: null}, head = {val: 0, next: null}
    sum = carry; // sum = 0, sum = 1,
    carry = 0; // carry = 0, carry = 0
  }
  return List.next;
};

const l1 = LinkedList.createLinkedList(2, 4, 3);
const l2 = LinkedList.createLinkedList(5, 6, 4);
// console.log(l1);
console.log(addTwoNumbers(l1.head, l2.head));
