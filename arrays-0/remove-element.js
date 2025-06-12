function removeElement(nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j = j + 1;
    }
  }
  return j;
}

function printRemovedDuplicates(arr, index) {
  console.log(arr.slice(0, index));
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4];
let res = removeElement(arr, 2);
printRemovedDuplicates(arr, res);

arr = [1, 5, 5, 5, 6];
res = removeElement(arr, 5);
printRemovedDuplicates(arr, res);

arr = [1, 1, 2];
res = removeElement(arr, 1);
printRemovedDuplicates(arr, res);
