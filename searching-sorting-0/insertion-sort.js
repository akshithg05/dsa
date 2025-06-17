// time complexity - O(n^2)
// spce complexit - O(1)

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    let j = i - 1;
    while (j >= 0 && x < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = x;
  }
  return arr;
}

console.log(insertionSort([4, 7, 3, 5, 1, 2]));
