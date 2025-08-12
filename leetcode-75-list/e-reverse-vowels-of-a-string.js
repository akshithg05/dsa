var reverseVowels = function (s) {
  let sArr = s.split("");
  let vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let i = 0;
  let j = s.length;
  while (i <= j) {
    if (vowelSet.has(sArr[i]) && vowelSet.has(sArr[j])) {
      [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
      i++;
      j--;
    }
    if (!vowelSet.has(sArr[i])) {
      i++;
    }
    if (!vowelSet.has(sArr[j])) {
      j--;
    }
  }
  let res = sArr.join("");
  return res;
};
