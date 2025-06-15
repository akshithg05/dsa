function sumOfAllNosArray(arr, index) {
  if (index === arr.length) return 0;
  return arr[index] + sumOfAllNosArray(arr, index + 1);
}

console.log(sumOfAllNosArray([1, 2, 3, 4, 5], 0));
console.log(sumOfAllNosArray([3, 5, 7, 9], 0));
