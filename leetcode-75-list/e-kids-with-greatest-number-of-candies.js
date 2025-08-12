var kidsWithCandies = function (candies, extraCandies) {
  let res = [];
  function largest(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  let largestCandies = largest(candies);
  console.log(largestCandies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= largestCandies) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};
