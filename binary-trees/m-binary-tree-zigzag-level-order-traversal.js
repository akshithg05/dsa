// Own solution using reverse array technique , time - O(n) and space O(n)
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  while (q.length > 0) {
    let size = q.length;
    let lev = [];
    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      lev.push(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    ans.push(lev);
  }
  for (let i = 1; i < ans.length; i = i + 2) {
    reverse(ans[i]);
  }
  return ans;
};

function reverse(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

// zigzag traversal
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  let lev = 0;
  while (q.length > 0) {
    let size = q.length;
    let temp = [];
    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      lev % 2 === 0 ? temp.push(curr.val) : temp.unshift(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    lev++;
    ans.push(temp);
  }
  return ans;
};
