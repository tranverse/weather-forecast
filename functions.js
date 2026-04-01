export function mySort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

export function findMedian(sortedArr) {
  let median = 0;
  if (sortedArr.length % 2 == 0) {
    median =
      (sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) /
      2;
  } else {
    median = sortedArr[Math.floor(sortedArr.length / 2)];
  }

  return median;
}
