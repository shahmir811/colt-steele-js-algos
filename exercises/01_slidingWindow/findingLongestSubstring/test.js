const findLongestSubstring = require('./index');

test('findLongestSubstring function exists', () => {
	expect(typeof findLongestSubstring).toEqual('function');
});

test("Given string '', the longest substring length is 0", () => {
	expect(findLongestSubstring('')).toEqual(0);
});

test("Given string 'rithmschool', the longest substring length is 7", () => {
	expect(findLongestSubstring('rithmschool')).toEqual(7);
});

test("Given string 'thisisawesome', the longest substring length is 6", () => {
	expect(findLongestSubstring('thisisawesome')).toEqual(6);
});

test("Given string 'thecatinthehat', the longest substring length is 7", () => {
	expect(findLongestSubstring('thecatinthehat')).toEqual(7);
});

test("Given string 'bbbbbbb', the longest substring length is 1", () => {
	expect(findLongestSubstring('bbbbbbb')).toEqual(1);
});

test("Given string 'longestsubstring', the longest substring length is 8", () => {
	expect(findLongestSubstring('longestsubstring')).toEqual(8);
});

test("Given string 'thisishowwedoit', the longest substring length is 6", () => {
	expect(findLongestSubstring('thisishowwedoit')).toEqual(6);
});
