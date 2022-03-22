const factorial = require('./index');

test('factorial function exists', () => {
	expect(typeof factorial).toEqual('function');
});

test('factorial(1) = 1', () => {
	expect(factorial(1)).toEqual(1);
});

test('factorial(2) = 2', () => {
	expect(factorial(2)).toEqual(2);
});

test('factorial(4) = 24', () => {
	expect(factorial(4)).toEqual(24);
});

test('factorial(7) = 5040', () => {
	expect(factorial(7)).toEqual(5040);
});
