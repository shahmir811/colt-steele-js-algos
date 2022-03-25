const binarySearch = require('./index');

test('binarySearch function exists', () => {
	expect(typeof binarySearch).toEqual('function');
});

test('binarySearch([1, 2, 3, 4, 5], 2) returns 1', () => {
	expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
});

test('binarySearch([1, 2, 3, 4, 5], 3) returns 2', () => {
	expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
});

test('binarySearch([1, 2, 3, 4, 5], 5) returns 4', () => {
	expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
});

test('binarySearch([1, 2, 3, 4, 5], 6) returns -1', () => {
	expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
});
