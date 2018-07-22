import examples from '../examples';

test('Add function should add numbers', () => {
  expect(examples.add(1,2)).toBe(3)
});

test('greet function should return hello', () => {
  expect(examples.greet('Adam')).toEqual('Hello Adam');
  expect(examples.greet('Piotr')).toEqual('Hello Piotr');
  expect({}).toEqual({});
});

test('fib gives nth fibbonaci number', () => {
  expect(examples.fib(1)).toEqual(1);
  expect(examples.fib(2)).toEqual(1);
  expect(examples.fib(3)).toEqual(2);
  expect(examples.fib(10)).toEqual(55);
});
