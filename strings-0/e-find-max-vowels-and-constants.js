// TIme - O(n), space - O(k), where k is the number of consonants, but fine to use as O(1)

var maxFreqSum = function (s) {
  let vowelSet = new Set(["a", "e", "i", "o", "u"]);
  resCons = {};
  resVow = {};
  for (let i = 0; i < s.length; i++) {
    if (vowelSet.has(s[i])) {
      if (resVow[s[i]]) {
        resVow[s[i]]++;
      } else {
        resVow[s[i]] = 1;
      }
    } else {
      if (resCons[s[i]]) {
        resCons[s[i]]++;
      } else {
        resCons[s[i]] = 1;
      }
    }
  }
  let vowMax = Math.max(0, ...Object.values(resVow));
  let consMax = Math.max(0, ...Object.values(resCons));
  return vowMax + consMax;
};
