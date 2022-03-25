const naiveStringSearch = require('./index');

test('naiveStringSearch function exists', () => {
	expect(typeof naiveStringSearch).toEqual('function');
});

test("naiveStringSearch('This is Pakistan', 'is') should be equal to 3", () => {
	expect(naiveStringSearch('This is Pakistan', 'is')).toEqual(3);
});

test("naiveStringSearch('hello everyone', 'is') should be equal to 0", () => {
	expect(naiveStringSearch('hello everyone', 'is')).toEqual(0);
});

test("naiveStringSearch('Pakistan and Afghanistan are neighbours', 'tan') should be equal to 2", () => {
	expect(
		naiveStringSearch('Pakistan and Afghanistan are neighbours', 'tan')
	).toEqual(2);
});

test("naiveStringSearch('Milk is better for health', 'is') should be equal to 1", () => {
	expect(naiveStringSearch('Milk is better for health', 'is')).toEqual(1);
});
