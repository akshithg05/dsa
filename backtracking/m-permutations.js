/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let n = nums.length;
  function backtrack(path) {
    if (path.length === n) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop();
      }
    }
  }
  backtrack([]);
  return res;
};
