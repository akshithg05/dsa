var fib = function (n) {
  if (n == 1) {
    return 1;
  }
  if (n == 0) {
    return 0;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(2));
console.log(fib(5));
console.log(fib(7));
