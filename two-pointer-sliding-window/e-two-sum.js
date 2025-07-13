function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map[diff] && map[diff] !== i) {
      return [i, map[diff]];
    }
  }
  return [-1, -1];
}
