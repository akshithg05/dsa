var goodNodes = function (root) {
  let gn = 0;
  function traversal(root, max) {
    if (!root) return;
    if (root.val >= max) {
      gn++;
    }
    max = Math.max(max, root.val);
    traversal(root.left, max);
    traversal(root.right, max);
  }
  traversal(root, root.val);
  return gn;
};
