// My naive implementation - Time - O(n), space- O(n)
var isValid = function (s) {
  let closeToOpen = { ")": "(", "}": "{", "]": "[" };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack && closeToOpen[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};
