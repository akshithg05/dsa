function sumOfOddNosArray(arr, index) {
  if (arr.length === index) return 0;
  if (arr[index] % 2 === 1) {
    return arr[index] + sumOfOddNosArray(arr, index + 1);
  }
  return sumOfOddNosArray(arr, index + 1);
}

console.log(sumOfOddNosArray([1, 2, 3, 4, 5], 0));
console.log(sumOfOddNosArray([1, 3, 5, 9, 11], 0));
