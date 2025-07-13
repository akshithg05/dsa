function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }
    if (minInd !== i) {
      let temp = arr[i];
      arr[i] = arr[minInd];
      arr[minInd] = temp;
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let x = arr[i];
    while (j >= 0 && arr[j] > x) {
      j = j - 1;
    }
    arr[j + 1] = x;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
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
    if (left[i] >= right[j]) {
      arr[k] = left[i];
      i--;
    } else {
      arr[k] = right[j];
      j--;
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

console.log(bubbleSort([5, 3, 2, 1, 4]));
console.log(bubbleSort([5]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log("-----------");
console.log(selectionSort([5, 3, 2, 1, 4]));
console.log(selectionSort([5]));
console.log(selectionSort([5, 4, 3, 2, 1]));
console.log("------------");
console.log(insertionSort([1, 5, 3, 4, 2]));
console.log("-------------");
console.log(mergeSort([5, 3, 2, 1, 4]));
console.log(mergeSort([5]));
console.log(mergeSort([5, 4, 3, 2, 1]));
