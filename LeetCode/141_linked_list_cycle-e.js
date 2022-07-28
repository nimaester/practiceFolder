// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached
// again by continuously following the next pointer. Internally, pos is used to denote the
// index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// [3,2, 0, -4, 2, 0, -4] Note that -4 connects to [2, 0, -4] meaning its a loop

var hasCycle = function (head) {
  let current = head;
  while (current) {
    if (current.val === "checked") return true;
    else {
      current.val = "checked";
      current = current.next;
    }
  }
  return false;
};
