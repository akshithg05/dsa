function bestTimeToBuyAndSell(arr) {
  let j = 0;
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] <= arr[j]) {
      j = i + 1;
    } else {
      profit = Math.max(arr[i + 1] - arr[j], profit);
    }
  }
  return profit;
}

console.log(bestTimeToBuyAndSell([7, 1, 5, 3, 6, 4]));
console.log(bestTimeToBuyAndSell([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));
