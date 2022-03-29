const insertionSort = require('./index');

test('insertionSort function exists', () => {
	expect(typeof insertionSort).toEqual('function');
});

test('insertionSort([2, 3, 4, 1, 2, 3, 4, 12]) returns [1, 2, 2, 3, 3, 4, 4, 12]', () => {
	expect(insertionSort([2, 3, 4, 1, 2, 3, 4, 12])).toEqual([1, 2, 2, 3, 3, 4, 4, 12]);
});

test('insertionSort([5, 4, 6, 2, 3, 1, 9, 8]) returns [1, 2, 3, 4, 5, 6, 8, 9]', () => {
	expect(insertionSort([5, 4, 6, 2, 3, 1, 9, 8])).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
});

test('insertionSort([6, 5, 9, 4, 6, 2, 1, 7]) returns [1, 2, 4, 5, 6, 6, 7, 9]', () => {
	expect(insertionSort([6, 5, 9, 4, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 6, 7, 9]);
});
