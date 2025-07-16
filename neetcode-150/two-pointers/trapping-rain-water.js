// My solution using prefix array and suffix array
// Time complexity = O(n), space complexity - O(1)
var trap = function (height) {
  let left = Array(height.length).fill(0);
  left[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    left[i] = Math.max(height[i], left[i - 1]);
  }

  let right = Array(height.length).fill(0);
  right[height.length - 1] = height[height.length - 1];
  for (let j = height.length - 2; j >= 0; j--) {
    right[j] = Math.max(height[j], right[j + 1]);
  }

  let water = 0;
  for (let k = 0; k < height.length; k++) {
    water = water + (Math.min(left[k], right[k]) - height[k]);
  }
  return water;
};

// Optimized solution using O(n) and O(1)
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water = water + leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water = water + rightMax - height[right];
      }
      right--;
    }
  }
  return water;
};
