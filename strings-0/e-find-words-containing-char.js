// 1 - Basic strraight forward , Time comp - O(n^2)

var findWordsContaining = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  console.log(res);
  return res;
};
