let arr = [5, 3, 1, 4, 2];

function heapSort(arr) {
  // first create a maxHeap
  let n = arr.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // Extract last element, put it to end and heapify the remaining array
  // This will sort the array
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}

function getLeftIndex(i) {
  return 2 * i + 1;
}

function getRightIndex(i) {
  return 2 * i + 2;
}

function heapifyDown(arr, i, n) {
  let left = getLeftIndex(i);
  let right = getRightIndex(i);
  let largest = i;

  if (left < n && arr[left] > arr[i]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[i]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

let sortedArr = heapSort(arr);
console.log(sortedArr);
