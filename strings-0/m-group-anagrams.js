// Time complexity - O(n*m), where n is the total number of strings, m is the length of longest string
// Space complexity - O(n)

var groupAnagrams = function (strs) {
  let resObj = {};
  for (let i = 0; i < strs.length; i++) {
    let arr = Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      arr[strs[i].charCodeAt(j) - 97]++;
    }
    if (resObj[arr]) {
      resObj[arr].push(strs[i]);
    } else {
      resObj[arr] = [strs[i]];
    }
  }
  console.log(resObj);
  return Object.values(resObj);
};
