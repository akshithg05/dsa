/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++;
    } else {
      count[nums[i]] = 1;
    }
  }

  let pq = new MinPriorityQueue((x) => x.freq); // make min priority queue according to frequency
  for (key in count) {
    pq.push({ val: key, freq: count[key] });
    if (pq.size() > k) {
      pq.pop();
    }
  }
  console.log(pq.toArray());
  return pq.toArray().map((x) => Number(x.val));
};
