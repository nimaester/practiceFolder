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
  // else we we would declare an variable to hold values of our sorted list
  // arg are mandatory so set val to something and next to null
  // while there are values for each linked list we check each one of them
  // if l1 value is < l2 value, we set newList.val to l1 or l2l value
  // we need a pointer to keep track of our current position in the new List
  // then if we place the l1 or l2 value in the new List and we keep track of our position by setting l1 or l2 to their next values
  // if we reach null our while loop breaks
  // if l1 or l2 are not null set them to the new list next
  // return list.next because our initial list node declaration has a value that we dont need

  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  let newNode = new ListNode(0, null);
  let position = newNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      position.next = l1;
      l1 = l1.next;
      position = position.next;
    } else {
      position.next = l2;
      l2 = l2.next;
      position = position.next;
    }
  }

  position.next = l1 || l2;
  return newNode.next;
};
