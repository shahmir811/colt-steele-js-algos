const fib = require('./index');

test('fib function exists', () => {
	expect(typeof fib).toEqual('function');
});

test('fib(4) is equal to 3', () => {
	expect(fib(4)).toEqual(3);
});

test('fib(10) is equal to 55', () => {
	expect(fib(10)).toEqual(55);
});

test('fib(28) is equal to 317811', () => {
	expect(fib(28)).toEqual(317811);
});

test('fib(35) is equal to 9227465', () => {
	expect(fib(35)).toEqual(9227465);
});
