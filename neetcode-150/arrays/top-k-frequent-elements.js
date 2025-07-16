//My own implementation - Time complexity - O(n^2)
var topKFrequent = function (nums, k) {
  let hash = {};
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }
  while (k > 0) {
    let mostFrequent = findLargest(hash);
    res.push(Number(mostFrequent));
    hash[mostFrequent] = -1;
    console.log(hash);
    k--;
  }
  return res;
};

function findLargest(hash) {
  let largest = -Infinity;
  let largestKey;
  for (const key in hash) {
    if (hash[key] > largest) {
      largest = hash[key];
      largestKey = key;
    }
  }
  return largestKey;
}

// Optimized solution using bucket sort - Time comp - O(n), space comp - O(n)
var topKFrequent = function (nums, k) {
  const count = {};
  const freq = Array(nums.length + 1)
    .fill()
    .map(() => []);
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++;
    } else {
      count[nums[i]] = 1;
    }
  }
  for (let num in count) {
    freq[count[num]].push(Number(num));
  }

  let res = [];
  for (let i = freq.length - 1; i > 0 && res.length <= k; i--) {
    for (let num of freq[i]) {
      res.push(num);
    }
    if (res.length === k) {
      return res;
    }
  }
  return res;
};
