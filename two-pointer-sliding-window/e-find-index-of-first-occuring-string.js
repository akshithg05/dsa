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

console.log(findIndex("sadbutsad", "sad"));
console.log(findIndex("leetcode", "leeto"));
console.log(findIndex("hello", "ll"));
console.log("-----------------------");
