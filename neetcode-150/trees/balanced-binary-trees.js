// Own solution (Brute force) using BFS, time complexity - O(N^2) as we are applying bfs for each node and again
// recursively calling the function

var isBalanced = function (root) {
  if (!root) return true;
  function height(root) {
    if (!root) return 0;
    let q = [root];
    let lev = 0;
    while (q.length) {
      let size = q.length;
      for (let i = 0; i < size; i++) {
        let curr = q.shift();
        curr.left && q.push(curr.left);
        curr.right && q.push(curr.right);
      }
      lev++;
    }
    return lev;
  }
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.right) && isBalanced(root.left);
};

// Optimized solution using maximum depth concept - O(n)
var isBalanced = function (root) {
  let ans = true;
  function calcHeight(root) {
    if (!root) return 0;
    let leftHeight = calcHeight(root.left);
    let rightHeight = calcHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = ans && false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  }
  calcHeight(root);
  return ans;
};
