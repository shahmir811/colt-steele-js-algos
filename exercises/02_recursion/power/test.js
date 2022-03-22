const power = require('./index');

test('power function exists', () => {
	expect(typeof power).toEqual('function');
});

test('power(2, 0) returns 1', () => {
	expect(power(2, 0)).toEqual(1);
});

test('power(2, 2) returns 4', () => {
	expect(power(2, 2)).toEqual(4);
});

test('power(2, 4) returns 16', () => {
	expect(power(2, 4)).toEqual(16);
});

test('power(3, 3) returns 27', () => {
	expect(power(3, 3)).toEqual(27);
});
