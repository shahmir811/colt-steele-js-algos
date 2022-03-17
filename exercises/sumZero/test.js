const sumZero = require('./index');

test('sumZero function exists', () => {
	expect(typeof sumZero).toEqual('function');
});

test('Result of [-3, -2, -1, 0, 1, 2, 3] must be [-3, 3]', () => {
	expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
});

test('Result of [-2, 0, 1, 3] must be undefined', () => {
	expect(sumZero([-2, 0, 1, 3])).toBeUndefined();
});

test('Result of [1, 2, 3] must be undefined', () => {
	expect(sumZero([1, 2, 3])).toBe(undefined);
});

test('Result of [-3, -2, -1, 0, 1, 2] must be [-2, 2]', () => {
	expect(sumZero([-3, -2, -1, 0, 1, 2])).toEqual([-2, 2]);
});
