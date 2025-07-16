// Time complexity - O(n)

var productExceptSelf = function (nums) {
  let pre = Array(nums.length).fill(0);
  let post = Array(nums.length).fill(0);
  let res = Array(nums.length).fill(0);

  pre[0] = post[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    pre[i] = pre[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    post[i] = post[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    res[i] = pre[i] * post[i];
  }
  return res;
};
