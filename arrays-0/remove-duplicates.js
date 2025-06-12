function removeDuplicates(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j = j + 1;
      arr[j] = arr[i];
    }
  }
  return j + 1;
}

function printRemovedDuplicates(arr, index) {
  console.log(arr.slice(0, index));
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4];
let res = removeDuplicates(arr);
printRemovedDuplicates(arr, res);

arr = [0];
res = removeDuplicates(arr);
printRemovedDuplicates(arr, res);

arr = [1, 1, 2];
res = removeDuplicates(arr);
printRemovedDuplicates(arr, res);
