// Recursive solution
var levelOrder = function (root) {
  let ans = [];
  function traversal(root, level) {
    if (!root) return [];
    if (!ans[level]) ans[level] = [];
    ans[level].push(root.val);
    root.left && traversal(root.left, level + 1);
    root.right && traversal(root.right, level + 1);
  }
  traversal(root, 0);
  return ans;
};

// Iterative solution - more preferred and used - time complexity of both solutions - O(n), space = O(n)
var levelOrder = function (root) {
  if (!root) return [];
  let q = [];
  let ans = [];
  q.push(root);
  while (q.length > 0) {
    let level = [];
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      level.push(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    ans.push(level);
  }
  return ans;
};
