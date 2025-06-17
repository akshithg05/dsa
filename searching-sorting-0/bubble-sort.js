// time complexity - O(n^2)
// spce complexit - O(1)

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([3, 7, 1, 9, 1, 22, 7]));
