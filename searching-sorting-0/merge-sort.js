// This is a divide and conquer algorithm
// Merge sort

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(arr, left, right);
}

function merge(arr, left, right) {
  let m = left.length;
  let n = right.length;
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (left[i] <= right[j]) {
      arr[k] = right[j];
      j--;
    } else {
      arr[k] = left[i];
      i--;
    }
    k--;
  }

  while (i >= 0) {
    arr[k] = left[i];
    i--;
    k--;
  }

  while (j >= 0) {
    arr[k] = right[j];
    j--;
    k--;
  }
  return arr;
}

console.log(mergeSort([5, 6, 9, 1, 5, 2, 4, 3, 8, 7]));
console.log(mergeSort([3, 4, 2, 1]));
