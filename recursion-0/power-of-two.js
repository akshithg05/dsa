var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  if (n == 1) {
    return true;
  }
  if (n % 2 == 1) {
    return false;
  }
  if (n % 2 == 0) {
    n = n / 2;
    return isPowerOfTwo(n);
  }
};
