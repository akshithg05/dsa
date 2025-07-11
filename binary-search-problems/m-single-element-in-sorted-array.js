// My own approach using Binary search - time complexity - O(logn)
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    if (nums[m] === nums[m + 1] && m % 2 == 0) {
      l = m + 1;
    } else if (nums[m] === nums[m + 1] && m % 2 == 1) {
      r = m - 1;
    } else if (nums[m] === nums[m - 1] && m % 2 == 0) {
      r = m - 1;
    } else if (nums[m] === nums[m - 1] && m % 2 == 1) {
      l = m + 1;
    } else {
      return nums[m];
    }
  }
};

// More optimized and better logic- using O(logn)
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // Ensure mid is even
    if (mid % 2 === 1) {
      mid--;
    }

    // Check if pair starts at mid
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
