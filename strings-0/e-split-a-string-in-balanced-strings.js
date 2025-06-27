// - Time complexity - O(n), space complexity - O(1)
var balancedStringSplit = function (s) {
  if (s.length === 0 || s.length === 1) {
    return 0;
  }
  let i = 0;
  let j = 0;
  let lc = 0;
  let rc = 0;
  res = 0;
  while (j <= s.length) {
    if (lc === rc && lc != 0) {
      res++;
      i = j;
      lc = 0;
      rc = 0;
    }
    if (s[j] === "R") {
      rc++;
      j++;
    } else {
      lc++;
      j++;
    }
  }
  return res;
};
