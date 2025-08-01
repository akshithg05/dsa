// Time complexity - O(n), space complexity - O(h), h is height of recursive stack
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
