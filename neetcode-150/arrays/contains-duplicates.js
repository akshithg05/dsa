// my solution -
var containsDuplicate = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }
  let arr = Object.values(hash);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 1) {
      return true;
    }
  }
  return false;
};

// Slight optimization using single loop traversal
// but still O(n) time and O(n) space.
var containsDuplicate = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return true;
    } else {
      hash[nums[i]] = 1;
    }
  }
  return false;
};
