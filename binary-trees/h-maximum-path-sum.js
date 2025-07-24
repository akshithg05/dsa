var maxPathSum = function (root) {
  let maxSum = 0;
  function traversal(curr) {
    if (!curr) return 0;
    let leftSum = Math.max(traversal(curr.left), 0);
    let rightSum = Math.max(traversal(curr.right), 0);
    let currSum = curr.val + leftSum + rightSum;
    maxSum = Math.max(currSum, maxSum);
    return curr.val + Math.max(leftSum, rightSum);
  }
  traversal(root);
  return maxSum;
};
