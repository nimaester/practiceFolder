/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // if one list is emtpy return the other one
  // else we we would declare an variable to hold values of our sorted list XX
  // while there are values for each linked list we check each one of them
  // if l1 value is < l2 value, we set newList.val to l1 or l2l value
  // we need a pointer to keep track of our current position in the new List
  // then if we place the l1 or l2 value in the new List and we keep track of our position by setting l1 or l2 to their next values
  // if we reach null our while loop breaks
  // return new linked List

  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  let newLl = new ListNode(0, null);
  let pos = newLl;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      pos.next = l1;
      l1 = l1.next;
    } else {
      pos.next = l2;
      l2 = l2.next;
    }
    pos = pos.next;
  }

  if (l1 === null) {
    pos.next = l2;
  } else {
    pos.next = l1;
  }

  return newLl.next; // we return next because our initial val is 0
};
