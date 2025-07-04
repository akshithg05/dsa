// Write functions such that all operations are in O(1)

class MinStack {
  constructor() {
    this.s = [];
    this.minStack = [];
  }

  push(val) {
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    }
    if (val <= this.getMin()) {
      this.minStack.push(val);
    }
    this.s.push(val);
  }

  pop() {
    let popped = this.s.pop();
    if (this.getMin() === popped) {
      this.minStack.pop();
    }
    return popped;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  top() {
    return this.s[this.s.length - 1];
  }

  print() {
    console.log(this.s);
  }
}

let stack = new MinStack();
stack.print();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();
console.log("Minimum is: ", stack.getMin());
stack.push(-1);
console.log("Minimun is: ", stack.getMin());
stack.print();
stack.pop();
stack.print();
stack.push(-3);
console.log("Minimum is:", stack.getMin());
