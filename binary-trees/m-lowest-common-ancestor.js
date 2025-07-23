var lowestCommonAncestor = function (root, p, q) {
  let lca = null;
  function traversal(curr) {
    let count = 0;
    if (!curr) return 0;
    let nodeOnLeft = traversal(curr.left);
    let nodeOnRight = traversal(curr.right);
    if (curr.val === p.val || curr.val === q.val) {
      count++;
    }
    count = count + nodeOnLeft + nodeOnRight;
    if (count === 2 && !lca) {
      lca = curr;
    }
    return count;
  }
  traversal(root);
  return lca;
};
