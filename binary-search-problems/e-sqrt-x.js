var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  l = 1;
  r = x;
  let ans;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (m * m > x) {
      r = m - 1;
    } else {
      ans = m;
      l = m + 1;
    }
  }
  return ans;
};
