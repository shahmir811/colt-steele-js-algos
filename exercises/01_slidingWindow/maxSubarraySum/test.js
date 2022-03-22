const maxSubarraySum = require('./index');

test('maxSubarraySum function exists', () => {
	expect(typeof maxSubarraySum).toEqual('function');
});

test('The maximum sum is 700', () => {
	expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
});

test('The maximum sum is 39', () => {
	expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
});

test('The maximum sum is 5', () => {
	expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
});

test('The maximum sum is 5', () => {
	expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
});

test('The maximum sum is null', () => {
	expect(maxSubarraySum([2, 3], 3)).toBeNull();
});
