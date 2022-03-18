const maxSubarraySum = require('./index');

test('maxSubarraySum function exists', () => {
	expect(typeof maxSubarraySum).toEqual('function');
});

test('[1, 2, 5, 2, 8, 1, 5] should return 10', () => {
	expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toEqual(10);
});

test('[1, 2, 5, 2, 8, 1, 5] should return 17', () => {
	expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toEqual(17);
});

test('[4, 2, 1, 6] should return 6', () => {
	expect(maxSubarraySum([4, 2, 1, 6], 1)).toEqual(6);
});

test('[4, 2, 1, 6, 2] should return 13', () => {
	expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toEqual(13);
});

test('[2, 6, 9, 2, 1, 8, 5, 6, 3] should return 19', () => {
	expect(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).toEqual(19);
});

test('[] should be equal to null', () => {
	expect(maxSubarraySum([], 4)).toBeNull();
});
