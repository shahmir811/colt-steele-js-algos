const averagePair = require('./index');

test('averagePair function exists', () => {
	expect(typeof averagePair).toEqual('function');
});

test('Pair of elements in  array [1, 2, 3] has the target average of 2.5', () => {
	expect(averagePair([1, 2, 3], 2.5)).toBeTruthy();
});

test('Pair of elements in  array [1, 3, 3, 5, 6, 7, 10, 12, 19] has the target average of 8', () => {
	expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBeTruthy();
});

test('Pair of elements in  array [-1, 0, 3, 4, 5, 6] has the target average of 4.1', () => {
	expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBeFalsy();
});

test('Pair of elements in  array [] has the target average of 4', () => {
	expect(averagePair([], 4)).toBeFalsy();
});
