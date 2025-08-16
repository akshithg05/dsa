var combinationSum3 = function (k, n) {
  let res = [];
  function backtrack(start, path, sum) {
    if (sum === n && path.length === k) {
      res.push([...path]);
      return;
    }
    if (sum > n) {
      return;
    }
    if (path.length === k) {
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(i + 1, path, sum + i);
      path.pop();
    }
  }
  backtrack(1, [], 0);
  return res;
};
