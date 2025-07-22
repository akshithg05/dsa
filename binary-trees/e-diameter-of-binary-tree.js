// Time complexiry - O(n), space complexity - O(h), h is height of binary tree

var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  let calcDiameter = function (root) {
    if (!root) return 0;
    let leftDepth = calcDiameter(root.left);
    let rightDepth = calcDiameter(root.right);
    let currDiameter = leftDepth + rightDepth;
    maxDiameter = Math.max(maxDiameter, currDiameter);
    return 1 + Math.max(leftDepth, rightDepth);
  };
  calcDiameter(root);
  return maxDiameter;
};
