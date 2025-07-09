// Optimized solution - O(logn)
function searchInRotatedSortedArray(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    if (arr[m] === target) {
      return m;
    } else if (arr[l] <= arr[m]) {
      // left half sorted
      if (target >= arr[l] && target < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target <= arr[r] && target > arr[m]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
}

console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)); // ➞ 4
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)); // ➞ -1
console.log(searchInRotatedSortedArray([1], 0)); // ➞ -1
