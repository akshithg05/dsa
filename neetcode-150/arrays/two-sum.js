// Time complexity = O(n)
// Space complexity = O(n)

var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hash[diff] && hash[diff] !== i) {
      return [i, hash[diff]];
    }
  }
  return [-1, -1];
};
