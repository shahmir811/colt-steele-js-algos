// Write a function call sameFrequency. Given two positive integers, find out if the two numbers
// have the same frequency of digits

// *********************************************************************** //
// Following is a good approach
// Time complexity - O(n)

const sameFrequency = (num1, num2) => {
	if (num1 === num2) return true;

	let str1 = num1.toString();
	let str2 = num2.toString();

	if (str1.length !== str2.length) return false;

	let obj1 = {};
	let obj2 = {};

	for (const char of str1) {
		obj1[char] = ++obj1[char] || 1;
	}

	for (const char of str2) {
		obj2[char] = ++obj2[char] || 1;
	}

	for (const key in obj1) {
		if (!(key in obj2)) {
			return false;
		}

		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}

	return true;
};

module.exports = sameFrequency;
