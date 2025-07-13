function sumOfNNos(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return n + sumOfNNos(n - 1);
}

function sumOfNosInArray(arr, ind) {
  if (ind === arr.length) {
    return 0;
  }
  return arr[ind] + sumOfNosInArray(arr, ind + 1);
}

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

var isPowerOfTwo = function (n) {
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  if (n % 2 === 1) {
    return false;
  }
  return isPowerOfTwo(n / 2);
};

var fib = function (n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(sumOfNNos(10));
console.log(sumOfNNos(4));
console.log("------------");
console.log(sumOfNosInArray([1, 2, 3, 4], 0));
console.log(sumOfNosInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
console.log("------------");
console.log(factorial(4));
console.log(factorial(6));
