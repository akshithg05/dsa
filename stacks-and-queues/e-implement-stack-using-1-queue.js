var MyStack = function () {
  this.q1 = [];
};

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length - 1;
  while (n > 0) {
    this.q1.push(this.q1.shift());
    n--;
  }
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  return this.q1[this.q1.length - 1];
};

MyStack.prototype.print = function () {
  console.log(this.q1);
};

MyStack.prototype.empty = function () {
  if (this.q1.length === 0) {
    return true;
  } else {
    return false;
  }
};

let stack = new MyStack();

console.log("Is stack empty? ", stack.empty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();
stack.pop();
stack.print();
console.log(stack.top());
console.log("Is stack empty? ", stack.empty());
