// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

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

const getValue = (ll) => {
  let result = [];
  let temp = ll;
  while (temp) {
    result.push(temp.val);
    temp = temp.next;
  }
  return BigInt(result.reverse().join(""));
};
const addTwoNumbers = (l1, l2) => {
  let l1Val = getValue(l1);
  let l2Val = getValue(l2);
  let sumOfLl = (l2Val + l1Val).toString().split("");

  let newNode = new ListNode(0);
  let pos = newNode;
  while (sumOfLl.length > 0) {
    let temp = new ListNode(Number(sumOfLl.pop()));
    pos.next = temp;
    pos = pos.next;
  }

  return newNode.next;
};
