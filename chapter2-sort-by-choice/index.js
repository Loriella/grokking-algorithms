export function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {

    let smallestIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (i !== smallestIndex) {
      const small = arr[smallestIndex];
      arr[smallestIndex] = arr[i];
      arr[i] = small;
    }
  }
  return arr;
}

// function findSmallest(arr) {
//   let smallest = arr[0];
//   let smallestIndex = 0;
//
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//       smallestIndex = i;
//     }
//   }
//   return smallestIndex;
// }
//
// export function selectionSort(arr) {
//   const newArr = [];
//
//   for (let i = 0, len = arr.length; i < len; i++) {
//     const smallest = findSmallest(arr);
//
//     newArr.push(arr.splice(smallest, 1)[0]);
//   }
//   return newArr;
// }
