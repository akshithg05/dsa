var largestOddNumber = function (num) {
  let i = num.length - 1;
  while (i >= 0) {
    console.log(num[i]);
    if (Number(num[i]) % 2 == 1) {
      return num.slice(0, i + 1);
    }
    i--;
  }
  return "";
};
