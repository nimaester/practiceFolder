Given a root of a binary tree, check where it is a mirror of itself (i.e., symmetrice around its center)

const checker = (leftNode, rightNode) => {
  if(!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode) return false;
  if(leftNode.val !== rightNode.val) return false;

  return checker(leftNode.left, rightNode.right) && checker(leftNode.left, rightNode.right)
}

const isSymmetricTree = (root) => {
  if (!root) return true;
  return checker(root.left, root.right)
}


