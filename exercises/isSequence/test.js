const isSubsequence = require('./index');

test('isSubsequence function exists', () => {
	expect(typeof isSubsequence).toEqual('function');
});

test("String 'hello world' contains 'hello' ", () => {
	expect(isSubsequence('hello', 'hello world')).toBeTruthy();
});

test("String 'sting' contains 'sing' ", () => {
	expect(isSubsequence('sing', 'sting')).toBeTruthy();
});

test("String 'abracadabra' contains 'abc' ", () => {
	expect(isSubsequence('abc', 'abracadabra')).toBeTruthy();
});

test("String 'acb' contains 'abc', as order changes ", () => {
	expect(isSubsequence('acb', 'abc')).toBeFalsy(); // Order matters
});
