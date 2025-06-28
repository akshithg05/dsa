// Time complexity - O(n), space - O(n)

var reverseStr = function (s, k) {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i = i + 2 * k) {
    let left = i;
    let right = Math.min(arr.length - 1, i + k - 1);

    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr.join("");
};
