const kmpSearch = require('./index');

test('kmpSearch function exists', () => {
	expect(typeof kmpSearch).toEqual('function');
});

test("kmpSearch('This is Pakistan', 'is') should be equal to 2", () => {
	expect(kmpSearch('This is Pakistan', 'is')).toEqual(2);
});

test("kmpSearch('hello everyone', 'is') should be equal to -1", () => {
	expect(kmpSearch('hello everyone', 'is')).toEqual(-1);
});

test("kmpSearch('Pakistan and Afghanistan are neighbours', 'tan') should be equal to 5", () => {
	expect(kmpSearch('Pakistan and Afghanistan are neighbours', 'tan')).toEqual(5);
});

test("kmpSearch('Milk is better for health', 'is') should be equal to 5", () => {
	expect(kmpSearch('Milk is better for health', 'is')).toEqual(5);
});
