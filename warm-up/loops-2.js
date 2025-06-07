// Write a function that searches for an element in ar array and returns the index, if element is not present then return -1

function searchInArray(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      return i;
    }
  }
  return -1;
}

// Write a function which returns the number of negative numbers in a given array

function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

// Write a function to return the largest number in an array

function largestInArray(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function smallestInArray(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log("Search for number in array and return index");
let res = searchInArray([1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(res);
res = searchInArray([1, 2, 3, 4, 5, 6, 7, 8], 8);
console.log(res);
res = searchInArray([1, 2, 3, 4, 5, 6, 7, 8], 9);
console.log(res);
res = searchInArray([1, 2, 3, 4, 5, 6, 7, 8], 0);
console.log(res);

console.log("Count negatives in an array");
res = countNegativeNumbers([1, -2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);
res = countNegativeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);
res = countNegativeNumbers([1, -2, 3, 4, 5, -6, 7, 8, -9]);
console.log(res);
res = countNegativeNumbers([-1, -2, -3, -4, -5, -6, -7, -8, -9]);
console.log(res);

console.log("Find largest in an array");
res = largestInArray([1, 2, 3, 4, 5, 6]);
console.log(res);
res = largestInArray([89, 23, 65, 678, 23, 567, 3]);
console.log(res);
res = largestInArray([-1, -2, -3, -4, -5, -6]);
console.log(res);

console.log("Find smallest number in array");
res = smallestInArray([1, 2, 3, 4, 5, 6]);
console.log(res);
res = smallestInArray([89, 23, 65, 678, 23, 567, 3]);
console.log(res);
res = smallestInArray([-1, -2, -3, -4, -5, -6]);
console.log(res);
