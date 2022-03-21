const minSubArrayLen = require('./index');

test('minSubArrayLen function exists', () => {
	expect(typeof minSubArrayLen).toEqual('function');
});

test('Given value 7, The maximum subArrayLen of [2, 3, 1, 2, 4, 3] is 2', () => {
	expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
});

test('Given value 9, The maximum subArrayLen of [2, 1, 6, 5, 4] is 2', () => {
	expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toEqual(2);
});

test('Given value 52, The maximum subArrayLen of [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52] is 1', () => {
	expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(1);
});

test('Given value 39, The maximum subArrayLen of [1, 4, 16, 22, 5, 7, 8, 9, 10] is 3', () => {
	expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toEqual(3);
});

test('Given value 55, The maximum subArrayLen of [1, 4, 16, 22, 5, 7, 8, 9, 10] is 5', () => {
	expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toEqual(5);
});

test('Given value 11, The maximum subArrayLen of [4, 3, 3, 8, 1, 2, 3] is 2', () => {
	expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toEqual(2);
});

test('Given value 95, The maximum subArrayLen of [1, 4, 16, 22, 5, 7, 8, 9, 10] is 0', () => {
	expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toEqual(0);
});
