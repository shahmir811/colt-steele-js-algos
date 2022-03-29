const bubbleSort = require('./index');

test('bubbleSort function exists', () => {
	expect(typeof bubbleSort).toEqual('function');
});

test('bubbleSort([2, 3, 4, 1, 2, 3, 4, 12]) returns [1, 2, 2, 3, 3, 4, 4, 12]', () => {
	expect(bubbleSort([2, 3, 4, 1, 2, 3, 4, 12])).toEqual([1, 2, 2, 3, 3, 4, 4, 12]);
});

test('bubbleSort([5, 4, 6, 2, 3, 1, 9, 8]) returns [1, 2, 3, 4, 5, 6, 8, 9]', () => {
	expect(bubbleSort([5, 4, 6, 2, 3, 1, 9, 8])).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
});

test('bubbleSort([6, 5, 9, 4, 6, 2, 1, 7]) returns [1, 2, 4, 5, 6, 6, 7, 9]', () => {
	expect(bubbleSort([6, 5, 9, 4, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 6, 7, 9]);
});
