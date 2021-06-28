// 145. Binary Tree Postorder Traversal

// Given the root of a binary tree, return the postorder traversal of its nodes' values.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var postorderTraversal = function(root) {
    
  
    let stack =[root];
    let result = [];
    
    while(stack.length){
        let currentNode = stack.pop();
        
        if(currentNode.left) {
           stack.push(currentNode.left)
        }
      
        if(currentNode.right) {
          stack.push(currentNode.right)
        }
          
        
        arr.unshift(currentNode.val);
        
    }
    
    return arr;
};

