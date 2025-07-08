// My solution , time - O(logn), but not most the amplified solution

var solution = function (isBadVersion) {
  return function (n) {
    l = 1;
    r = n;
    while (l <= r) {
      let m = Math.floor(l + (r - l) / 2);
      if (!isBadVersion(m)) {
        l = m + 1;
      } else {
        if (m > 1 && !isBadVersion(m - 1)) {
          return m;
        } else if (m === 1) {
          return m;
        } else {
          r = m - 1;
        }
      }
    }
    return -1;
  };
};

// Optimized and cleaner solution, same time complexity - O(logn)
var solution = function (isBadVersion) {
  return function (n) {
    let l = 1;
    let r = n;
    let ans;
    while (l <= r) {
      let m = Math.floor(l + (r - l) / 2);
      if (!isBadVersion(m)) {
        l = m + 1;
      } else {
        ans = m;
        r = m - 1;
      }
    }
    return ans;
  };
};
