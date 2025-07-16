// Time complexity is - O(n*k), where n is the length of the array
// and total number of strings in the array.
// K is the length of the longest string in the array as we are looping through that as well.
// Space complexity - O(n*k)

var groupAnagrams = function (strs) {
  let res = {};
  for (let i = 0; i < strs.length; i++) {
    let c = Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      c[strs[i].charCodeAt(j) - 97]++;
    }
    if (res[c]) {
      res[c].push(strs[i]);
    } else {
      res[c] = [strs[i]];
    }
  }
  return Object.values(res);
};
