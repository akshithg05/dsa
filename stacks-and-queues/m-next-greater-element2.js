var nextGreaterElement = function (arr) {
  let res = new Array(arr.length).fill(-1);
  let n = arr.length;
  let s = [];
  for (let i = 0; i < 2 * n; i++) {
    while (s.length && arr[i % n] > arr[s[s.length - 1]]) {
      let resIdx = s.pop();
      res[resIdx] = arr[i % n];
    }
    if (i < n) {
      s.push(i);
    }
  }
  return res;
};

console.log(nextGreaterElement([1, 2, 1]));
