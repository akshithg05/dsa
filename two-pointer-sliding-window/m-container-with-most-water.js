// Time complexity - O(n), space complexit - O(1)
var maxArea = function (height) {
  let j = height.length - 1;
  let i = 0;
  let maxArea = 0;
  while (i < j) {
    maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]));
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};
