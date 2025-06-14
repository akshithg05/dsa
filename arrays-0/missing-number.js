// O(n^2) naive solution
var missingNumber = function (nums) {
  let n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

// Optimized solution - O(n)

var missingNumber = function (nums) {
  let n = nums.length;
  let sum1 = 0;
  for (let i = 0; i < n; i++) {
    sum1 = sum1 + nums[i];
  }

  let refSum = 0;
  for (let i = 0; i <= n; i++) {
    refSum = refSum + i;
  }
  return refSum - sum1;
};

// Best solution - O(n)

var missingNumber = function (nums) {
  let n = nums.length;
  let sum1 = 0;
  for (let i = 0; i < n; i++) {
    sum1 = sum1 + nums[i];
  }

  let refSum = (n * (n + 1)) / 2;
  return refSum - sum1;
};
