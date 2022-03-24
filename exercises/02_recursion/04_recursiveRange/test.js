const recursiveRange = require('./index');

test('recursiveRange function exists', () => {
	expect(typeof recursiveRange).toEqual('function');
});

test('recursiveRange(6) is equal to 21', () => {
	expect(recursiveRange(6)).toEqual(21);
});

test('recursiveRange(10) is equal to 55', () => {
	expect(recursiveRange(10)).toEqual(55);
});
