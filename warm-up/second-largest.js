// Write a program to find the second largest number in an array
function secondLargest(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === -Infinity) {
    return -1;
  }
  return secondLargest;
}

// Cleaner solution with corner case handled
function secondLargestOpt(arr) {
  if (arr.length < 2) {
    return -1;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? -1 : secondLargest;
}

let res = secondLargest([1, 2, 3, 4, 5, 6]);
console.log(res);
res = secondLargest([1, 1, 1, 1, 1, 1]);
console.log(res);
res = secondLargest([12, 76, 34, 96, 123, 456]);
console.log(res);

console.log("############");

res = secondLargestOpt([1, 2, 3, 4, 5, 6]);
console.log(res);
res = secondLargestOpt([1, 1, 1, 1, 1, 1]);
console.log(res);
res = secondLargestOpt([12, 76, 34, 96, 123, 456]);
console.log(res);
