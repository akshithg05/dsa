var canPlaceFlowers = function (flowerbed, n) {
  let rem = n;
  let i = 0;
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) {
    return true;
  }
  while (i <= flowerbed.length) {
    if (rem === 0) {
      return true;
    }
    if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      rem--;
    }
    if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
      flowerbed[i] = 1;
      rem--;
    }
    if (i > 0 && i < flowerbed.length && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      rem--;
    }
    i++;
  }
  return false;
};
