function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    console.log(`${i}: ${arr}`);
  }

  return arr;
}

console.log('SelectionSort: ', selectionSort([1, 5, 3, 2, 8, 7, 6, 4]));
