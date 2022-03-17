// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase or name formed by rearranging the letters of another.
// For example, cinema formed from iceman

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('cinema', 'iceman') // true
// validAnagram('anagram', 'nagaram') // true
// validAnagram('car', 'rat') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qwtrey') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// *********************************************************************** //
// My Solution
// Time complexity - O(n)

// const validAnagram = (str1, str2) => {
// 	if (str1.length !== str2.length) return false;

// 	const obj1 = {};
// 	const obj2 = {};

// 	for (const char of str1) {
// 		obj1[char] = ++obj1[char] || 1;
// 	}

// 	for (const char of str2) {
// 		obj2[char] = ++obj2[char] || 1;
// 	}

// 	for (const key in obj1) {
// 		if (!(key in obj2)) return false;

// 		if (obj1[key] !== obj2[key]) return false;
// 	}

// 	return true;
// };

// *********************************************************************** //
// Colt Steele Solution
// Time complexity - O(n)

function validAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
	}

	const lookup = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		// if letter exists, increment, otherwise set to 1
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}
	console.log(lookup);

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		// can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}

	return true;
}

module.exports = validAnagram;
