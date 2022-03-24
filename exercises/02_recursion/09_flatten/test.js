const flatten = require('./index');

test('flatten function exists', () => {
	expect(typeof flatten).toEqual('function');
});

test('flatten([1, 2, 3, [4, 5]]) to return [1, 2, 3, 4, 5]', () => {
	expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
});

test('flatten([1, [2, [3, 4], [[5]]]]) to return [1, 2, 3, 4, 5]', () => {
	expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
});

test('flatten([[1], [2], [3]]) to return [1, 2, 3]', () => {
	expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
});

test('flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) to return [1, 2, 3]', () => {
	expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
});
