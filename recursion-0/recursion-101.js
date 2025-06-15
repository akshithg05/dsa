function fun(n) {
  if (n == 0) return;
  console.log(n);
  n = n - 1;
  fun(n);
}

const a = 5;
fun(a);
