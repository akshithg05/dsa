// Own solution time comp - O(n), space complexity -O(n)
var isValidBST = function (root) {
  let res = [];
  function traversal(root) {
    if (!root) return;
    traversal(root.left);
    res.push(root.val);
    traversal(root.right);
  }
  traversal(root);
  for (let i = 1; i < res.length; i++) {
    if (res[i - 1] >= res[i]) {
      return false;
    }
  }
  return true;
};

// Optimized Solution
var isValidBST = function (root, lo = null, hi = null) {
  if (!root) return true;
  if ((lo != null && lo >= root.val) || (hi != null && hi <= root.val)) return false;
  return isValidBST(root.left, lo, root.val) && isValidBST(root.right, root.val, hi);
};
