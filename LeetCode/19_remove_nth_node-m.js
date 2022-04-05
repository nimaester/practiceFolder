const LinkedList = require("../AlgorithmsDataStructures/DataStructures/LinkedList");

const arrayMe = (ll) => {
  const result = [];
  let current = ll;
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  return result;
};

var removeNthFromEnd = function (head, n) {
  let current = head;
  let target = head;
  let prev = null;
  if (head.next === null) {
    return null;
  }

  for (let i = 0; i < n; i++) {
    current = current.next;
    console.log(`${i} = I`, current);
  }
  while (current !== null) {
    prev = target;
    target = target.next;
    current = current.next;
  }
  if (target.next === null) {
    prev.next = null;
    return arrayMe(head);
  } else {
    prev.next = target.next;
    return arrayMe(head);
  }
};

const ll = new LinkedList();
ll.addToHead(2);
ll.addToHead(1);
ll.addToHead(3);
ll.addToHead(4);
ll.addToHead(5);
console.log(ll);

console.log(removeNthFromEnd(ll.head, 1));
