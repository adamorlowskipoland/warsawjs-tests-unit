import utilities from '../utilities';

test('to toCurrency function should return rounded number', () => {
  expect(utilities.toCurrency(0)).toEqual(0.00);
  expect(utilities.toCurrency(1.98722)).toEqual(1.99);
  expect(utilities.toCurrency(123.1254)).toEqual(123.13);
});

test('to toCurrency function should return rounded number', () => {
  expect(utilities.toCurr(1.98722)).toEqual('1.99');
  expect(utilities.toCurr(123.1254)).toEqual('123.13');
});
