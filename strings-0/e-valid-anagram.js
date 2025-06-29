// TIme complexity - O(n), space complexity - O(k), k - number of characetistics.

var isAnagram = function (s, t) {
  let sc = {};
  for (let i = 0; i < s.length; i++) {
    if (sc[s[i]]) {
      sc[s[i]]++;
    } else {
      sc[s[i]] = 1;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (sc[t[j]]) {
      sc[t[j]]--;
    } else {
      return false;
    }
  }
  return Object.values(sc).every((val) => val === 0);
};
