function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_ind = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_ind]) {
        min_ind = j;
      }
    }
    if (min_ind !== i) [arr[i], arr[min_ind]] = [arr[min_ind], arr[i]];
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let x = arr[i];
    while (j >= 0 && arr[j] > x) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = x;
  }
  return arr;
}

function binarySearch(arr){
  
}

let arr = [3, 5, 1, 4, 2];
let res = bubbleSort(arr);
console.log(res);
arr = [3, 5, 1, 4, 2];
res = selectionSort(arr);
console.log(res);
arr = [3, 5, 1, 4, 2];
res = insertionSort(arr);
console.log(res);
