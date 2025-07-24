// Own solution , time complexity - O(n), space complexity - O(n)
var connect = function (root) {
  if (!root) return null;
  let q = [root];
  while (q.length) {
    let lev = [];
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      lev.push(curr);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    let curr = lev.shift();
    let levSize = lev.length;
    while (levSize > 0) {
      let node = lev.shift();
      curr.next = node;
      curr = curr.next;
      levSize--;
    }
  }
  return root;
};

// Recursive solution
