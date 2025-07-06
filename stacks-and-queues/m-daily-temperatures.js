// Naive 2 pointer approach - O(n^2)

var dailyTemperatures = function (temperatures) {
  let i = 0;
  let j = 1;
  res = [];
  while (i < temperatures.length) {
    if (temperatures[j] > temperatures[i]) {
      res.push(j - i);
      i = i + 1;
      j = i + 1;
    } else if (j >= temperatures.length) {
      res.push(0);
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
  return res;
};

// Use monotonic stack approach

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
