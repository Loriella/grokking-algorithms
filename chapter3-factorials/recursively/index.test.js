const factorial = require('./index').factorial;

test('find factorial numbers', () => {
  const n = 5;
  expect(factorial(n)).toEqual(120);
});