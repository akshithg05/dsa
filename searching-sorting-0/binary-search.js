// Time complexity - O(logn) , space complexity - O(n)

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};

console.log(linearSeacrh([1, 2, 3, 4, 5], 4));
console.log(linearSeacrh([3, 6, 12, 68, 12, 4], 4));
console.log(linearSeacrh([3, 6, 12, 68, 12, 4], 345));
