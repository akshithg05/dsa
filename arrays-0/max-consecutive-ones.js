var findMaxConsecutiveOnes = function (nums) {
  let j = -1;
  let maxOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      maxOnes = Math.max(i - j, maxOnes);
    } else {
      j = i;
    }
  }
  return maxOnes;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
