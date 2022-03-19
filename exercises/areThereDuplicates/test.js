const areThereDuplicates = require('./index');

test('areThereDuplicates function exists', () => {
	expect(typeof areThereDuplicates).toEqual('function');
});

test('(1,2,3) no duplicate enteries exist', () => {
	expect(areThereDuplicates(1, 2, 3)).toBeFalsy();
});

test('(1, 2, 3, 4, 5, 2) duplicate enteries exist', () => {
	expect(areThereDuplicates(1, 2, 3, 4, 5, 2)).toBeTruthy();
});

test(" ('a', 'b', 'c', 'd', 'e', 'f', 'c') duplicate enteries exist", () => {
	expect(areThereDuplicates('a', 'b', 'c', 'd', 'e', 'f', 'c')).toBeTruthy();
});
