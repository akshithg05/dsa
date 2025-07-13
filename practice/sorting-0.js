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

console.log(bubbleSort([5, 3, 2, 1, 4]));
console.log(bubbleSort([5]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log("-----------");
console.log(selectionSort([5, 3, 2, 1, 4]));
console.log(selectionSort([5]));
console.log(selectionSort([5, 4, 3, 2, 1]));
