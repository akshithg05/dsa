function reverseInteger(n) {
  const temp = n;
  rev = 0;
  n = Math.abs(n);
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  if (temp < 0) {
    console.log(rev * -1);
    return rev * -1;
  }
  console.log(rev);
  return rev;
}

reverseInteger(123);
reverseInteger(-123);

console.log(Math.pow(2, 4));
