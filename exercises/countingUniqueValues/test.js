const countUniqueValues = require('./index');

test('countUniqueValues function exists', () => {
	expect(typeof countUniqueValues).toEqual('function');
});

test('Have 2 unique values in [1, 1, 1, 1, 1, 2]', () => {
	expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
});

test('Have 7 unique values in [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]', () => {
	expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
});

test('No unique values in []', () => {
	expect(countUniqueValues([])).toEqual(0);
});

test('Have 4 unique values in [-2, -1, 0, 1]', () => {
	expect(countUniqueValues([-2, -1, 0, 1])).toEqual(4);
});
