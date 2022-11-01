// 2. Add Two Numbers
// You are given two non-empty linked lists representing two
// non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const LinkedList = require("../AlgorithmsDataStructures/DataStructures/LinkedList");

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  var List = new Node(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.value;

      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.value;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    let newNode = new Node(sum);
    head.next = newNode;
    head = head.next;
    sum = carry;
    carry = 0;
  }
  return List.next;
};

const l1 = LinkedList.createLinkedList(2, 4, 3);
const l2 = LinkedList.createLinkedList(5, 6, 4);
// console.log(l1);
console.log(addTwoNumbers(l1.head, l2.head));
