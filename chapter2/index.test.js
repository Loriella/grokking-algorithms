const selectionSort = require('./index').selectionSort;

test('arrays match', () =>{
  const arr = [9, 5, 3, 1];
  expect(selectionSort(arr)).toEqual([1, 3, 5, 9]);
});