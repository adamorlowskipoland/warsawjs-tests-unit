import examples from './examples';
import utilities from './utilities';

test('Add function should add numbers', () => {
  expect(examples.add(1,2)).toBe(3)
});

test('greet function should return hello', () => {
  expect(examples.greet('Adam')).toEqual('Hello Adam');
  expect(examples.greet('Piotr')).toEqual('Hello Piotr');
  expect({}).toEqual({});
});

test('to toCurrency function should return rounded number', () => {
  expect(utilities.toCurrency(1.98722)).toEqual(1.99);
  expect(utilities.toCurrency(123.1254)).toEqual(123.13);
});

test('to toCurrency function should return rounded number', () => {
  expect(utilities.toCurr(1.98722)).toEqual('1.99');
  expect(utilities.toCurr(123.1254)).toEqual('123.13');
});
