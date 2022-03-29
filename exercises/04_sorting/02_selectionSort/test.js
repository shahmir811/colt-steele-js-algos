const selectionSort = require('./index');

test('selectionSort function exists', () => {
	expect(typeof selectionSort).toEqual('function');
});

test('selectionSort([2, 3, 4, 1, 2, 3, 4, 12]) returns [1, 2, 2, 3, 3, 4, 4, 12]', () => {
	expect(selectionSort([2, 3, 4, 1, 2, 3, 4, 12])).toEqual([1, 2, 2, 3, 3, 4, 4, 12]);
});

test('selectionSort([5, 4, 6, 2, 3, 1, 9, 8]) returns [1, 2, 3, 4, 5, 6, 8, 9]', () => {
	expect(selectionSort([5, 4, 6, 2, 3, 1, 9, 8])).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
});

test('selectionSort([6, 5, 9, 4, 6, 2, 1, 7]) returns [1, 2, 4, 5, 6, 6, 7, 9]', () => {
	expect(selectionSort([6, 5, 9, 4, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 6, 7, 9]);
});
