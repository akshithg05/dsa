var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(dfs(nums.slice(0, nums.length - 1), 0, {}), dfs(nums.slice(1), 0, {}));
};

function dfs(nums, i, memo) {
  if (i >= nums.length) {
    return 0;
  }
  if (memo[i] !== undefined) return memo[i];
  memo[i] = Math.max(nums[i] + dfs(nums, i + 2, memo), dfs(nums, i + 1, memo));
  return memo[i];
}
