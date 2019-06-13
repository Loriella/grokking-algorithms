export function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const supporting = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < supporting ? less.push(arr[i]) : greater.push(arr[i]);
  }
  return quickSort(less).concat(supporting, quickSort(greater));
}

