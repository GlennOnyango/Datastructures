const binarySearch = (array, value) => {
  let midPoint = Math.round(array.length / 2);
  let start = 0;
  let fin = array.length - 1;
  let stop = true;

  while (stop) {
    if (array[array.length - 1] < value || array[0] > value) {
      stop = false;
    } else if (array[midPoint] == value) {
      stop = false;
      return midPoint;
    } else if (array[midPoint] < value) {
      start = midPoint;
      midPoint = Math.round((fin + start) / 2);
    } else if (array[midPoint] > value) {
      fin = midPoint;
      midPoint = Math.round((fin + start) / 2);
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
)); // 2
console.log(binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  95
)); // 16
console.log(binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
)); // -1
