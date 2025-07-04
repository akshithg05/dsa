// Naive approach with Time and space - O(n)
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let res = 0;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] != "+" && tokens[i] != "-" && tokens[i] != "*" && tokens[i] != "/") {
      stack.push(tokens[i]);
    } else if (tokens[i] == "+") {
      let n1 = stack.pop();
      let n2 = stack.pop();
      res = parseInt(n1) + parseInt(n2);
      stack.push(res);
    } else if (tokens[i] == "*") {
      let n1 = stack.pop();
      let n2 = stack.pop();
      res = parseInt(n1) * parseInt(n2);
      stack.push(res);
    } else if (tokens[i] == "-") {
      let n1 = stack.pop();
      let n2 = stack.pop();
      res = parseInt(n2) - parseInt(n1);
      stack.push(res);
    } else if (tokens[i] == "/") {
      let n1 = stack.pop();
      let n2 = stack.pop();
      res = parseInt(n2) / parseInt(n1);
      stack.push(res);
    }
  }
  return parseInt(stack.pop());
};

// Better approach with same time complexity but removed redundant code
var evalRPN2 = function (tokens) {
  let stack = [];
  let res = 0;
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] != "+" && tokens[i] != "-" && tokens[i] != "*" && tokens[i] != "/") {
      stack.push(tokens[i]);
    } else {
      let n1 = parseInt(stack.pop());
      let n2 = parseInt(stack.pop());
      let res = operators[tokens[i]](n2, n1);
      stack.push(res);
    }
  }
  return parseInt(stack.pop());
};
