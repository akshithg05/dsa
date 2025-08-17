// 1. Brute force- time - O(n^2), space - O(n)
var maxOperations = function (nums, k) {
  let visited = new Set();
  let opCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === k && !visited.has(i) && !visited.has(j)) {
        opCount++;
        visited.add(i);
        visited.add(j);
      }
    }
  }
  return opCount;
};

// 2. 2 pointer optimized - O(nlogn), space - O(1)
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;
  let count = 0;
  while (i < j) {
    if (nums[i] + nums[j] === k) {
      i++;
      j--;
      count++;
    } else if (nums[i] + nums[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return count;
};

// 3. frequency map, hash array method - Time - O(n), space - O(n)
var maxOperations = function (nums, k) {
  let map = {};
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    let comp = k - nums[i];
    if (map[comp] > 0) {
      count++;
      map[comp]--;
    } else {
      if (map[nums[i]]) {
        map[nums[i]]++;
      } else {
        map[nums[i]] = 1;
      }
    }
  }
  return count;
};
