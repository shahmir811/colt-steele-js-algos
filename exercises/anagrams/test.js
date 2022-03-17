const validAnagram = require('./index');

test('validAnagram function exists', () => {
	expect(typeof validAnagram).toEqual('function');
});

test('"aaz" is a valid anagram of "zza"', () => {
	expect(validAnagram('aaz', 'zza')).toBeFalsy();
});

test('"cinema" is a valid anagram of "iceman"', () => {
	expect(validAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"anagram" is a valid anagram of "nagaram"', () => {
	expect(validAnagram('anagram', 'nagaram')).toBeTruthy();
});

test('"car" is a valid anagram of "rat"', () => {
	expect(validAnagram('car', 'rat')).toBeFalsy();
});

test('"awesome" is a valid anagram of "awesom"', () => {
	expect(validAnagram('awesome', 'awesom')).toBeFalsy();
});

test('"qwerty" is a valid anagram of "qwtrey"', () => {
	expect(validAnagram('qwerty', 'qwtrey')).toBeTruthy();
});

test('"texttwisttime" is a valid anagram of "timetwisttext"', () => {
	expect(validAnagram('texttwisttime', 'timetwisttext')).toBeTruthy();
});
