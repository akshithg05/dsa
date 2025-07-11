// My own solution - time complexity - O(logn)

var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let first = -1;
  let m = -1;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      if (m > 0 && nums[m - 1] === target) {
        r = m - 1;
      } else {
        first = m;
        l = m + 1;
      }
    }
  }

  l = 0;
  r = nums.length - 1;

  let last = -1;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      if (m < nums.length - 1 && nums[m + 1] === target) {
        l = m + 1;
      } else {
        last = m;
        r = m - 1;
      }
    }
  }
  return [first, last];
};
