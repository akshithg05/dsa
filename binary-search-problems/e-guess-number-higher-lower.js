var guessNumber = function (n) {
  let l = 1;
  let h = n;
  while (l <= h) {
    let m = Math.floor((l + h) / 2);
    if (guess(m) == -1) {
      h = m - 1;
    } else if (guess(m) === 1) {
      l = m + 1;
    } else {
      return m;
    }
  }
  return -1;
};
