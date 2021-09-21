// 111. Minimum Depth of Binary Tree
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

var minDepth = function (root) {
  // start at root
  // if no root return 0
  // push root into a queue
  // while queue is more than 0
  //     keep track of nodes in the queue
  //     while nodes is more than 0
  //.      remove first added node to the queue
  //.      check if that node has a left or right child
  //       if they have add to queue
  //.      subract 1 from number of nodes
  //.
  if (!root) {
    return 0;
  }
  let depth = 1;
  let queue = [root];

  while (queue.length) {
    let nodes = queue.length;
    for (let i = 0; i < nodes; i++) {
      let node = queue.shift();
      if (!node.left && !node.right) {
        return depth;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
};

/*


amazon shopping recently lauched a new item whose daily customer ratings for n days is represented by the array ratings. They monitor these ratings to identify producats taht are not performing well. Find the number of groups that can be formed cosisiteing of 1 or more conseutive days such that the rating continuously decreases ovedr the days

the rating is consecutively decreasing if it has the form : r, r-1, r-2... and so on, wheer r is the rating on the first day of the group being considered. Two groups are considered different if they contain the ratings of different consecutive days

ex
rat = [4, 3, 5, 4, 3]

there are 9 periords ins which the rating consecutively decreaess
5 one day periods 4, 3, 5, 4, 3
3 two day periods 43, 54, 43,
1 three day period 543
*/
