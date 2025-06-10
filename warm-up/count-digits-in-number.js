// Write a program which counts the number of digits in a number
function countDigits(n) {
  n = Math.abs(n);
  if (n == 0) {
    return 1;
  }
  count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count = count + 1;
  }
  return count;
}

console.log(countDigits(234));
console.log(countDigits(234234));
console.log(countDigits(-234));
console.log(countDigits(1));
console.log(countDigits(0));
