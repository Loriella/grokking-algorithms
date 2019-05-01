const binarySearch = require('./index').binarySearch;

test('testing list with needed item', () => {
  const list1 = [1, 3, 5, 7, 9];
  expect(binarySearch(list1, 3)).toBe(1);

  const list2 = [1];
  expect(binarySearch(list2, 1)).toBe(0);
});

test('testing list without needed item', () => {
  const list1 = [1, 3, 5, 7, 9];
  expect(binarySearch(list1, 8)).toBe(-1);

  const list2 = [1];
  expect(binarySearch(list2, 3)).toBe(-1);
});

test('testing empty list', () => {
  const list1 = [];
  expect(binarySearch(list1, 8)).toBe(-1);
});


