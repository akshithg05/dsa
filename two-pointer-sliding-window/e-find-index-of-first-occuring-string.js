// Naive appraoch , time complexity - O(m*n)
function findIndex(haystack, needle) {
  n = haystack.length;
  m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    for (; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === m) {
      return i;
    }
  }
  return -1;
}

// Similar solution , time complexity O(n*m)
var strStr = function (haystack, needle) {
  if (needle === "") return 0;

  let i = 0;
  let j = 0;
  let n = haystack.length;

  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === needle.length) {
        return i - needle.length;
      }
    } else {
      i = i - j + 1; // backtrack i to the next starting position
      j = 0;
    }
  }

  return -1;
};

// Knuth- Morris - Pratt algorithm
var strStr = function (haystack, needle) {
  let i = 0;
  let j = 1;
  let lps = [0];
  let n = haystack.length;
  let m = needle.length;
  while (j < m) {
    if (needle[j] === needle[i]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i === 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }

  i = 0;
  j = 0;
  while (i < n) {
    if (needle[j] === haystack[i]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }
    if (j === m) {
      return i - m;
    }
  }
  return -1;
};

console.log(findIndex("sadbutsad", "sad"));
console.log(findIndex("leetcode", "leeto"));
console.log(findIndex("hello", "ll"));
console.log("-----------------------");
