// 1. My method using built in functions
// Time - O(n), space - O(n)
var lengthOfLastWord = function (s) {
  s = s.trim();
  let words = s.split(" ");
  return words[words.length - 1].length;
};

// 2 . Using double loop
// Time - O(n), space - O(1)
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  let c = 0;
  while (i >= 0 && s[i] !== " ") {
    c++;
    i--;
  }
  return c;
};

// 3. Single loop solution - Time comp - O(n), Space - O(1)
var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  let c = 0;

  while (n >= 0) {
    if (s[n] !== " ") {
      c++;
    } else if (c > 0) {
      break;
    }
    n--;
  }
  return c;
};
