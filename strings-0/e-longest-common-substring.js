// My approach - O(m*n)

var longestCommonPrefix = function (strs) {
  let ref = strs[0];
  let res = "";
  for (let i = 0; i < ref.length; i++) {
    let c = 0;
    for (let j = 0; j < strs.length; j++) {
      if (ref[i] === strs[j][i]) {
        c++;
      } else {
        return res;
      }
    }
    if (c === strs.length) {
      res = res + ref[i];
    }
  }
  return res;
};
