// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const getNumbers = (ll) => {
  let listArray = [];

  let status = true;

  while (status) {
    console.log(ll);
    if (ll.next === undefined || ll.next === null) {
      listArray.unshift(String(ll.val));
      return listArray.join("");
      status = false;
    } else {
      listArray.unshift(String(ll.val));
      ll = ll.next;
      status = true;
    }
  }
};
var addTwoNumbers = function (l1, l2) {
  let list1 = getNumbers(l1);
  let list2 = getNumbers(l2);
  let newLinkedListString = String(Number(list1) + Number(list2)).split("");
  let newLl = new ListNode(newLinkedListString[0], newLinkedListString[1]);
  for (let i = 2; i < newLinkedListString.length - 1; i++) {
    let head = newLl;
    newLl.val = newLinkedListString[i];
    newLl.next = newLinkedListString[i + 1];
    newLl;
  }
};

const ll1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };

const ll2 = { val: 5, next: { val: 7, next: { val: 6, next: null } } };

console.log(addTwoNumbers(ll1, ll2));
