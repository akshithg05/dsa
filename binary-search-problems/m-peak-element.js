// Naive solution , time complexity - O(n)
var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[i + 1] < nums[i]) {
      return i;
    } else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    } else if (i === nums.length - 1 && nums[i - 1] < nums[i]) {
      return i;
    }
  }
  return -1;
};

// Better solution using O(logn) - My own implementation
var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (m > 0 && m < nums.length - 1) {
      if (nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) {
        return m;
      } else if (nums[m + 1] > nums[m] && nums[m - 1] < nums[m]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else if (m === 0) {
      if (nums[m + 1] < nums[m]) {
        return m;
      } else {
        l = m + 1;
      }
    } else if (m === nums.length - 1) {
      if (nums[m - 1] < nums[m]) {
        return m;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};

// Slightly cleaner version - O(logn)
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m + 1] > nums[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
};
