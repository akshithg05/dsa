function isPallindrome(n) {
  const temp = n;
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(rev);
  if (rev === temp) {
    return true;
  }
  return false;
}

console.log(isPallindrome(121));
console.log(isPallindrome(123));
console.log(isPallindrome(12));
console.log(isPallindrome(0));
