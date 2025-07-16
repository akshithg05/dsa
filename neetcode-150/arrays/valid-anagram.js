// My solution - time complexity O(n), space complexity - O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sc = {};
  let tc = {};
  for (let i = 0; i < s.length; i++) {
    if (sc[s[i]]) {
      sc[s[i]]++;
    } else {
      sc[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (tc[t[i]]) {
      tc[t[i]]++;
    } else {
      tc[t[i]] = 1;
    }
  }
  console.log(sc);
  console.log(tc);

  for (const key in sc) {
    if (tc[key] && tc[key] === sc[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// More optimized solution, time complexity - O(n), space complexity - O(1
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let res = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    res[s.charCodeAt(i) - 97]++;
    res[t.charCodeAt(i) - 97]--;
  }
  console.log(res);
  for (let i = 0; i < 26; i++) {
    if (res[i] !== 0) {
      return false;
    }
  }
  return true;
};
