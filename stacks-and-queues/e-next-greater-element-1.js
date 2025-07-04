// Approach 1 - Brute force , time - O(n^2)

var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  nums1.forEach((num) => res.push(-1));
  for (let i = 0; i < nums1.length; i++) {
    let found = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        found = true;
      }
      if (found && nums2[j] > nums1[i]) {
        res[i] = nums2[j];
        break;
      }
    }
  }
  return res;
};

// Approach 2 - using monotonic stack and time complexity - O(n)
var nextGreaterElement2 = function (nums1, nums2) {
  let s = [];
  let map = {};
  for (let i = 0; i < nums2.length; i++) {
    while (s.length && nums2[i] > s[s.length - 1]) {
      let popped = s.pop();
      map[popped] = nums2[i];
    }
    s.push(nums2[i]);
  }
  return nums1.map((num) => map[num] ?? -1);
};
