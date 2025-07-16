// My 2 pointer solution time comp O(n), space - O(1)

var maxArea = function (height) {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    maxArea = Math.max((j - i) * Math.min(height[i], height[j]), maxArea);
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};
