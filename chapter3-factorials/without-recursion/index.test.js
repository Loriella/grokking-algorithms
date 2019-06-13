const factorial = require('./index').factorial;

test('find factorial numbers', () => {
  const n = 8;
  expect(factorial(n)).toEqual(40320);
});