function sumOfFirstN(n) {
  if (n == 0) return 0;
  return n + sumOfFirstN(n - 1);
}

console.log(sumOfFirstN(5));
console.log(sumOfFirstN(6));
console.log(sumOfFirstN(10));
