// Time complexity - O(n), space complexity - O(h), where h is height of recursion tree
var invertTree = function (root) {
  if (!root) return null;
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};
