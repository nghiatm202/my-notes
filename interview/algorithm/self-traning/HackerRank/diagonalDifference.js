function diagonalDifference(arr) {
  // Write your code here
  let sumLeft = 0;
  let sumRight = 0;

  for (let i = 0; i < arr.length; i++) {
    sumLeft += arr[i][i];
    sumRight += arr[i][arr.length - 1 - i];
  }

  return Math.abs(sumLeft - sumRight);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [2, 8, 9],
  ])
);
