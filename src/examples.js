const examples = {
  add: (a, b) => a + b,
  greet: (name) => `Hello ${name}`,
  fib: (num) => {
    if (num <= 2) return 1;

    return examples.fib(num - 1) + examples.fib(num - 2);
  }
};

export default examples;