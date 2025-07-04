// Using a stack

var removeOuterParentheses1 = function (s) {
  let stack = [];
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (stack.length > 0) {
        res = res + s[i];
      }
      stack.push(s[i]);
    } else if (s[i] === ")") {
      stack.pop();
      if (stack.length > 0) {
        res = res + s[i];
      }
    }
  }
  return res;
};
// Without stack - Time - O(n), space - O(1)
var removeOuterParentheses = function (s) {
  let res = "";
  let temp = "";
  let open = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
    } else {
      open--;
    }
    temp = temp + s[i];

    if (open === 0) {
      res = res + temp.slice(1, -1);
      temp = "";
    }
  }
  return res;
};

console.log(removeOuterParentheses1("(()())(())((()()))"));
