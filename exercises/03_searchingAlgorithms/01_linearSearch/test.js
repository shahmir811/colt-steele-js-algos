const linearSearch = require('./index');

test('linearSearch function exists', () => {
	expect(typeof linearSearch).toEqual('function');
});

test('linearSearch([10, 15, 20, 25, 30, 35], 15) returns 1', () => {
	expect(linearSearch([10, 15, 20, 25, 30, 35], 15)).toEqual(1);
});

test('linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) returns 5', () => {
	expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toEqual(5);
});

test('linearSearch([100], 100) returns 0', () => {
	expect(linearSearch([100], 100)).toEqual(0);
});

test('linearSearch([1, 2, 3, 4, 5], 6) returns -1', () => {
	expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
});

test('linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) returns -1', () => {
	expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toEqual(-1);
});

test('linearSearch([100], 200) returns -1', () => {
	expect(linearSearch([100], 200)).toEqual(-1);
});
