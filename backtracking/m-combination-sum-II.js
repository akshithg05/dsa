var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  console.log(candidates);
  let res = [];
  let n = candidates.length;
  function backtrack(start, path, sum) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    if (sum > target) {
      return;
    }
    for (let i = start; i < n; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(i + 1, path, sum + candidates[i]);
      path.pop();
    }
  }
  backtrack(0, [], 0);
  return res;
};
