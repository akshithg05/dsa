var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

MyQueue.prototype.print = function () {
  console.log(this.s1);
};

MyQueue.prototype.pop = function () {
  let n = this.s1.length;
  while (n > 0) {
    this.s2.push(this.s1.pop());
    n--;
  }
  let popped = this.s2.pop();
  n = this.s2.length;
  while (n > 0) {
    this.s1.push(this.s2.pop());
    n--;
  }
  return popped;
};

MyQueue.prototype.peek = function () {
  return this.s1[0];
};

MyQueue.prototype.empty = function () {
  if (this.s1.length === 0) {
    return true;
  }
  return false;
};

let q = new MyQueue();
console.log(q.empty());
q.print();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.print();
console.log(q.pop());
q.print();
console.log(q.peek());
q.print();
console.log(q.empty());

/// More optimized version

// Worst case - O(n)
// Average case - O(1)
var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
};

MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

MyQueue.prototype.print = function () {
  console.log([...this.s2].reverse().concat(this.s1));
};
