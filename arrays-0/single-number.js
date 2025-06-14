// O(n) , but using extra space with Set
var singleNumber = function (nums) {
  let hashSet = new Set();
  nums.forEach((value) => {
    hashSet.add(value);
  });

  let numsSum = 0;
  nums.forEach((value) => {
    numsSum = numsSum + value;
  });

  let totalSum = 0;
  hashSet.forEach((value) => {
    totalSum = totalSum + value;
  });
  totalSum = totalSum * 2;
  return totalSum - numsSum;
};

// Optimised solution with O(n) using bitwise XOR operator

function singleNumberOpt(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
}

console.log(singleNumber([1, 1, 2, 2, 3]));
console.log(singleNumberOpt([2, 2, 3, 4, 5, 4, 3]));
