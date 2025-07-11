// Time complexity - O(logn)

var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = Math.floor(l + (r - l) / 2);

    if (arr[m] > arr[m - 1] && arr[m] > arr[m + 1]) {
      return m;
    } else if (arr[m + 1] > arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
};
