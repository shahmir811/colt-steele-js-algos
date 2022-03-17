const same = require('./index');

test('same function exists', () => {
	expect(typeof same).toEqual('function');
});

test('Array [4,9,1] contains the square values of [1,2,3]', () => {
	expect(same([1, 2, 3], [4, 9, 1])).toBeTruthy();
});

test('Array [1, 9] does not contain all the square values of [1,2,3]', () => {
	expect(same([1, 2, 3], [1, 9])).toBeFalsy();
});

test('Array [4, 4, 1] contains the square values of [1,2,1]', () => {
	expect(same([1, 2, 1], [4, 4, 1])).toBeFalsy();
});
