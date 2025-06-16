// Time complexity- O(n)
// Space complexity - O(n)

function linearSeacrh(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSeacrh([1, 2, 3, 4, 5], 4));
console.log(linearSeacrh([3, 6, 12, 68, 12, 4], 4));
