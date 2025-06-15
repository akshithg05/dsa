function printOneToN(n) {
  if (n == 0) return;
  printOneToN(n - 1);
  console.log(n);
}

printOneToN(5);
