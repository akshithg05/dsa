// Brute force approach, time complexity - O(m*n)
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Optimized appraoch using serialization
var isSubtree = function (root, subRoot) {
  let hash = "";
  function preOrderHash(curr) {
    if (!curr) {
      hash = hash + "-#";
    } else {
      hash = hash + "-" + curr.val;
      preOrderHash(curr.left);
      preOrderHash(curr.right);
    }
  }
  preOrderHash(root);
  let p1 = hash;
  hash = "";
  preOrderHash(subRoot);
  let p2 = hash;
  console.log(p1);
  console.log(p2);
  return p1.includes(p2);
};
