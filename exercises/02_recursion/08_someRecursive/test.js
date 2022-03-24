const { someRecursive, callback } = require('./index');

test('callback function exists', () => {
	expect(typeof callback).toEqual('function');
});

test('someRecursive function exists', () => {
	expect(typeof someRecursive).toEqual('function');
});

test('someRecursive([1, 2, 3, 4], callback) to return true', () => {
	expect(someRecursive([1, 2, 3, 4], callback)).toBeTruthy();
});

test('someRecursive([4, 6, 8, 9], callback) to return true', () => {
	expect(someRecursive([4, 6, 8, 9], callback)).toBeTruthy();
});

test('someRecursive([4, 6, 8], callback) to return false', () => {
	expect(someRecursive([4, 6, 8], callback)).toBeFalsy();
});
