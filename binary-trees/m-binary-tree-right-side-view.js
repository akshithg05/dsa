// Time complexity - O(n), space complexity for resulting array - O(n)
var rightSideView = function (root) {
  if (!root) return [];
  let rightSide = [];
  let q = [root];
  while (q.length) {
    let lev = [];
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      lev.push(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    rightSide.push(lev.pop());
  }
  return rightSide;
};
