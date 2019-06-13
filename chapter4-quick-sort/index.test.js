const quickSort = require('./index').quickSort;

test('quick sort', () =>{
  const arr = [9, 10, 3, 1, 17, 5];
  expect(quickSort(arr)).toEqual([1, 3, 5, 9, 10, 17]);
});