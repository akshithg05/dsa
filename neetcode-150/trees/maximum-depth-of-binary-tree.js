// BFS solution with O(n), space -O(n)
var maxDepth = function (root) {
  if (!root) return 0;
  let q = [];
  let levels = 0;
  q.push(root);
  while (q.length > 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    levels++;
  }
  return levels;
};

// DFS solution for the same
var maxDepth = function (root) {
  if (!root) return 0;
  function traversal(root, level) {
    if (!root) {
      return level;
    }
    return Math.max(traversal(root.left, level + 1), traversal(root.right, level + 1));
  }
  return traversal(root, 0);
};
