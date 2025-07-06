function rottenOranges(grid) {
  let q = [];
  let maxMins = 0;
  let n = grid.length; // rows
  let m = grid[0].length; // columns

  for (let i = 0; i < n; i++) {
    // traversing row
    for (let j = 0; j < m; j++) {
      // traversing column
      if (grid[i][j] === 2) {
        q.push([i, j, 0]);
      }
    }
  }

  while (q.length > 0) {
    let [x, y, min] = q.shift();

    if (x < n - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      q.push([x + 1, y, min + 1]);
    }
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      q.push([x - 1, y, min + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      q.push([x, y - 1, min + 1]);
    }
    if (y < m - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      q.push([x, y + 1, min + 1]);
    }
    maxMins = Math.max(maxMins, min);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }
  return maxMins;
}

console.log(
  rottenOranges([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
