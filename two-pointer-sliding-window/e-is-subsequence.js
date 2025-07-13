var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  if (s === "") {
    return true;
  }
  while (i < t.length) {
    if (s[j] === t[i]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  if (j === s.length) {
    return true;
  }
  return false;
};
