var reverseWords = function (s) {
  s = s.trim();
  let modStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      modStr = modStr + s[i];
    } else if (s[i] === " " && s[i - 1] !== " ") {
      modStr = modStr + "#";
    }
  }
  let sArr = modStr.split("#");
  let i = 0;
  let j = sArr.length - 1;
  while (i < j) {
    [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
    i++;
    j--;
  }
  return sArr.join(" ");
};
