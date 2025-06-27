// Time complexity - O(n)
// Space complexity - O(52) or O(1), beacuse all jewels are alphabets and only 26*2 total alphabets english letters

// Whenever string and set are there we can narrow down space complexities to constancts

var numJewelsInStones = function (jewels, stones) {
  let h = new Set();
  for (let i = 0; i < jewels.length; i++) {
    h.add(jewels[i]);
  }
  let c = 0;
  for (let i = 0; i < stones.length; i++) {
    if (h.has(stones[i])) {
      c++;
    }
  }
  return c;
};
