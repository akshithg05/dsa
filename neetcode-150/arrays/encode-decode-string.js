class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let i = 0; i < strs.length; i++) {
      res = res + strs[i].length + "#" + strs[i];
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j = j + 1;
      }
      let len = Number(str.slice(i, j));
      j = j + 1;
      res.push(str.slice(j, j + len));
      i = j + len;
    }
    return res;
  }
}
