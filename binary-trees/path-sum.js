var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.right && !root.left) {
    return root.val === targetSum;
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
